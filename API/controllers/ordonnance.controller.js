const ordonnanceRepo = require('../repositories/ordonnance.repository');

async function createOrdonnanceAction(request, response) {
    try {
        const ordonnance_id = await ordonnanceRepo.createOrdonnance(request.body.patient_id, request.body.medecin_id, Date.now());
        if (ordonnance_id != null) {
            
            for (element in request.body.prescriptions){
                
                const prescription_id = await ordonnanceRepo.createPrescription(ordonnance_id, element.medecine, element.posologie, element.renewale, element.given, element.ordonnance_id);
                if (prescription_id != null) {
                    console.log('[', request.ip, '] CREATED Prescription : ', prescription_id);
                }else{
                    console.log('[', request.ip, '] ERROR Prescription : ', prescription_id);
                }
            }
            response.status(200).json({ info: "ordonnance created successfully", ordonnance: ordonnance_id });
        } else {
            response.status(400).json({ error: "invalid request" });
        }
    } catch (err) {
        console.log(err);
        throw err;
    }
}

async function getOrdonnanceByIdAction(request, response) {
    try {
        const ordonnance = await ordonnanceRepo.getOrdonnanceById(request.params.id);

        if (ordonnance != null) {
            const prescriptions = await ordonnanceRepo.getPrescriptionsByOrdonnanceId(ordonnance.id);

            if (prescriptions != null) {
                response.status(200).json({ info: "ordonnance found successfully", ordonnance: ordonnance, prescriptions: prescriptions });
            }else{
                response.status(400).json({ error: "invalid request" });
            }
        } else {
            response.status(400).json({ error: "invalid request" });
        }
    } catch (err) {
        console.log(err);
        throw err;
    }
}

async function updatePrescriptionAction(request, response) {
    try {
        const result = await ordonnanceRepo.updatePrescription(request.params.id, request.body.medecine, request.body.posologie, request.body.renewale, request.body.given, request.body.ordonnance_id);

        if (result != null) {
            response.status(200).json({ info: "prescription updated successfully", prescription: result });
        } else {
            response.status(400).json({ error: "invalid request" });
        }
    } catch (err) {
        console.log(err);
        throw err;
    }
}

async function deletePrescriptionAction(request, response) {
    try {
        const result = await ordonnanceRepo.deletePrescription(request.params.id);

        if (result != null) {
            response.status(200).json({ info: "prescription deleted successfully", prescription: result });
        } else {
            response.status(400).json({ error: "invalid request" });
        }
    } catch (err) {
        console.log(err);
        throw err;
    }
}

async function deleteOrdonnanceAction(request, response) {
    try {
        const result = await ordonnanceRepo.deleteOrdonnance(request.params.id);

        if (result != null) {
            response.status(200).json({ info: "ordonnance deleted successfully", ordonnance: result });
        } else {
            response.status(400).json({ error: "invalid request" });
        }
    } catch (err) {
        console.log(err);
        throw err;
    }
}

module.exports = {
    createOrdonnanceAction,
    getOrdonnanceByIdAction,
    updatePrescriptionAction,
    deletePrescriptionAction,
    deleteOrdonnanceAction
}




