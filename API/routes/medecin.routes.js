const express = require('express');
const router = express.Router();
const medecinController = require('../controllers/medecin.controller');
const { checkAuth } = require('../utils/user.auth');


// ROUTE REGISTRATIONS
router.post('/register',checkAuth("admin"), medecinController.createMedecinAction);
router.delete('/delete/:id', checkAuth("all"), medecinController.deleteMedecinAction);
router.put('/update/:id', checkAuth("all"), medecinController.updateMedecinAction);
router.get('/get/:id', checkAuth('all'), medecinController.getMedecinByIdAction);
router.get('/all', checkAuth('admin'), medecinController.getMedecinsAction);

module.exports = router;



