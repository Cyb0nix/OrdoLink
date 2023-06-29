import medecinRepo from '../repositories/medecin.repository.js';
import { hashSync, compareSync } from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import userRepo from '../repositories/users.repository.js';
import account_typeRepo from '../repositories/account_type.repository.js';



async function createMedecinAction(request, response){
    try{
        const hashed_password = hashSync(request.boby.password, 10);
        const user_id = await userRepo.createUser(request.body.email, hashed_password, true, new Date(Date.now() + 1000 * 3600 * 24).toUTCString());
        if (user_id != null) {
            console.log('[', request.ip, '] CREATED User : ', id);
            const medecin_id = await medecinRepo.createMedecin(request.body);
            if(result != null){
                const result = await account_typeRepo.addAccountType(user_id, medecin_id, "medecin");
                if(result != null){
                    console.log('[', request.ip, '] CREATED Medecin : ', medecin_id);
                    response.status(200).json({ info: "medecin created successfully", medecin_id: medecin_id });
                }
            }
        }else{
            response.status(400).json({ error: "invalid request" });
        }
    }
    catch(err){
        console.log(err);
        throw err;
    }

}

async function getMedecinByIdAction(request, response){
    try{
        const result = await medecinRepo.getMedecinById(request.params.id);
        if(result != null){
            response.status(200).json({ info: "medecin found successfully", medecin: result });
        }else{
            response.status(400).json({ error: "invalid request" });
        }
    }
    catch(err){
        console.log(err);
        throw err;
    }
}

async function getMedecins(request, response){
    try{
        const result = await medecinRepo.getMedecins();
        if(result != null){
            response.status(200).json({ info: "medecins found successfully", medecins: result });
        }else{
            response.status(400).json({ error: "invalid request" });
        }
    }
    catch(err){
        console.log(err);
        throw err;
    }
}

async function updateMedecinAction(request, response){
    try{
        const result = await medecinRepo.updateMedecin(request.params.id, request.body.rpps, request.body.phone_number, request.body.lastname, request.body.firstname, request.body.email, request.body.password, request.body.rpps_expiration_date, request.body.type_id);
        if(result != null){
            response.status(200).json({ info: "medecin updated successfully", medecin: result });
        }else{
            response.status(400).json({ error: "invalid request" });
        }
    }
    catch(err){
        console.log(err);
        throw err;
    }
}

async function deleteMedecinAction(request, response){
    try{
        const result = await medecinRepo.deleteMedecin(request.params.id);
        if(result != null){
            response.status(200).json({ info: "medecin deleted successfully", medecin: result });
        }else{
            response.status(400).json({ error: "invalid request" });
        }
    }
    catch(err){
        console.log(err);
        throw err;
    }
}

module.exports = {
    createMedecinAction,
    getMedecinByIdAction,
    getMedecins,
    updateMedecinAction,
    deleteMedecinAction
}

