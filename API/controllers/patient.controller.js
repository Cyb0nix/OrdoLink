const patientRepo = require('../repositories/patient.repository.js');
const userRepo = require('../repositories/user.repository.js');
const accountTypeRepo = require('../repositories/account_type.repository.js');
const medecinRepo = require('../repositories/medecin.repository.js');
const { hashSync } = require('bcrypt');

async function createPatientAction(request, response) {
  try {
        const hashed_password = hashSync(request.body.password, 10);
        const user_id = await userRepo.createUser(request.body.email, hashed_password, true, new Date(Date.now() + 1000 * 3600 * 24).toUTCString());
    if (user_id != null) {
      console.log('[', request.ip, '] CREATED User:', user_id);
      const patient_id = await patientRepo.createPatient(request.body.num_secu, request.body.lastname, request.body.firstname);

      if (patient_id != null) {
        const result = await accountTypeRepo.createAccountType(user_id, patient_id.id, "patient");

        if (result != null) {
          const addpatient = await medecinRepo.addMedecinPatients(patient_id.id, request.body.medecin_id);
          if (addpatient != null) {
            console.log('[', request.ip, '] CREATED Patient:', patient_id);
            response.status(200).json({ info: "Patient created successfully", patient_id: patient_id });
          }
        }
        
        
      }
    } else {
      response.status(400).json({ error: "Invalid request" });
    }
  } catch (err) {
    console.log(err);
    throw err;
  }
}

async function getPatientByIdAction(request, response) {
  try {
    const result = await patientRepo.getPatientById(request.params.id);

    if (result != null) {
      response.status(200).json({ info: "Patient found successfully", patient: result });
    } else {
      response.status(400).json({ error: "Invalid request" });
    }
  } catch (err) {
    console.log(err);
    throw err;
  }
}

async function getPatientsAction(request, response) {
  try {
    const result = await patientRepo.getPatients();

    if (result != null) {
      response.status(200).json({ info: "Patients found successfully", patients: result });
    } else {
      response.status(400).json({ error: "Invalid request" });
    }
  } catch (err) {
    console.log(err);
    throw err;
  }
}

async function updatePatientAction(request, response) {
  try {
    const result = await patientRepo.updatePatient(request.params.id, request.body.num_secu, request.body.lastname, request.body.firstname);

    if (result != null) {
      response.status(200).json({ info: "Patient updated successfully", patient: result });
    } else {
      response.status(400).json({ error: "Invalid request" });
    }
  } catch (err) {
    console.log(err);
    throw err;
  }
}

async function deletePatientAction(request, response) {
  try {
    const result = await patientRepo.deletePatient(request.params.id);

    if (result != null) {
      response.status(200).json({ info: "Patient deleted successfully", patient: result });
    } else {
      response.status(400).json({ error: "Invalid request" });
    }
  } catch (err) {
    console.log(err);
    throw err;
  }
}

async function getPatientOrdonnances(request, response) {
  try {
    const result = await patientRepo.getPatientOrdonnances(request.params.id);
    console.log("result : ", result);

    if (result != null) {
      response.status(200).json({ info: "Patient ordonnances found successfully", ordonnances: result });
    } else {
      response.status(400).json({ error: "Invalid request" });
    }
  } catch (err) {
    console.log(err);
    throw err;
  }
}


module.exports = {
  createPatientAction,
  getPatientByIdAction,
  getPatientsAction,
  updatePatientAction,
  deletePatientAction,
  getPatientOrdonnances
};
