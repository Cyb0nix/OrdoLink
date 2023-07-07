const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patient.controller');
const { checkAuth } = require('../utils/user.auth');


// ROUTE REGISTRATIONS
router.post('/register',checkAuth("medecin"), patientController.createPatientAction);
router.delete('/delete/:id', checkAuth("all"), patientController.deletePatientAction);
router.put('/update/:id', checkAuth("all"), patientController.updatePatientAction);
router.get('/get/:id', patientController.getPatientByIdAction);
router.get('/all', checkAuth('admin'), patientController.getPatientsAction);
router.get('/ordonnances/:id', checkAuth('patient'), patientController.getPatientOrdonnances);

module.exports = router;



