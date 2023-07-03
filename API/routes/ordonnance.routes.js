const express = require('express');
const router = express.Router();
const ordonnanceController = require('../controllers/ordonnance.controller');
const { checkAuth } = require('../utils/user.auth');


// ROUTE REGISTRATIONS
router.post('/create',checkAuth("medecin"), ordonnanceController.createOrdonnanceAction);
router.get('/get/:id', ordonnanceController.getOrdonnanceByIdAction);
router.put('/update/:id', ordonnanceController.updatePrescriptionAction);
router.get('/all', ordonnanceController.getOrdonnancesAction);

module.exports = router;