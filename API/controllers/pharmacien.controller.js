const pharmacienRepo = require('../repositories/pharmacien.repository.js');
const userRepo = require('../repositories/user.repository.js');
const accountTypeRepo = require('../repositories/account_type.repository.js');
const { hashSync } = require('bcrypt');

async function createPharmacienAction(request, response) {
  try {
    if (!(await userRepo.checkExistsUser(request.body.email))) {
      const { email, password, firstname, lastname, rpps, rpps_expiration} = request.body;

      // Créer un nouvel utilisateur avec un mot de passe hashé
      const hashed_password = hashSync(password, 10);
      const user_id = await userRepo.createUser(email, hashed_password, true, new Date(Date.now() + 1000 * 3600 * 24).toUTCString());

      if (user_id != null) {
        console.log('[', request.ip, '] CREATED User:', user_id);

        // Créer un nouveau pharmacien
        const pharmacien = { firstname, lastname, rpps, rpps_expiration};
        const pharmacien_id = await pharmacienRepo.createPharmacien(pharmacien);

        if (pharmacien_id != null) {
          // Ajouter un type de compte pour le pharmacien
          const result = await accountTypeRepo.createAccountType(user_id, pharmacien_id, "pharmacien");

          if (result != null) {
            console.log('[', request.ip, '] CREATED Pharmacien:', pharmacien_id);
            response.status(200).json({ info: "Pharmacien created successfully", pharmacien_id: pharmacien_id });
          }
        }
      } else {
        response.status(400).json({ error: "Invalid request" });
      }
    } else {
      response.status(400).json({ error: "email already taken" });
    }
  } catch (err) {
    console.log(err);
    throw err;
  }
}

async function getPharmacienByIdAction(request, response) {
  try {
    const result = await pharmacienRepo.getPharmacienById(request.params.id);

    if (result != null) {
      response.status(200).json({ info: "Pharmacien found successfully", pharmacien: result });
    } else {
      response.status(400).json({ error: "Invalid request" });
    }
  } catch (err) {
    console.log(err);
    throw err;
  }
}

async function getPharmaciensAction(request, response) {
  try {
    const result = await pharmacienRepo.getPharmaciens();

    if (result != null) {
      response.status(200).json({ info: "Pharmaciens found successfully", pharmaciens: result });
    } else {
      response.status(400).json({ error: "Invalid request" });
    }
  } catch (err) {
    console.log(err);
    throw err;
  }
}

async function updatePharmacienAction(request, response) {
  try {
    const { id, firstname, lastname, rpps } = request.body;
    const result = await pharmacienRepo.updatePharmacien(id, firstname, lastname, rpps);

    if (result != null) {
      response.status(200).json({ info: "Pharmacien updated successfully", pharmacien: result });
    } else {
      response.status(400).json({ error: "Invalid request" });
    }
  } catch (err) {
    console.log(err);
    throw err;
  }
}

async function deletePharmacienAction(request, response) {
  try {
    const result = await pharmacienRepo.deletePharmacien(request.params.id);

    if (result != null) {
      response.status(200).json({ info: "Pharmacien deleted successfully", pharmacien: result });
    } else {
      response.status(400).json({ error: "Invalid request" });
    }
  } catch (err) {
    console.log(err);
    throw err;
  }
}

module.exports = {
  createPharmacienAction,
  getPharmacienByIdAction,
  getPharmaciensAction,
  updatePharmacienAction,
  deletePharmacienAction
};
