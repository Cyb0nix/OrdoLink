const express = require('express');
const router = express.Router();
const pharmacienController = require('../controllers/pharmacien.controller');
const { checkAuth } = require('../utils/user.auth');


// ROUTE REGISTRATIONS
router.post('/register',checkAuth("admin"), pharmacienController.createPharmacienAction);
router.delete('/delete/:id', checkAuth("all"), pharmacienController.deletePharmacienAction);
router.put('/update/:id', checkAuth("all"), pharmacienController.updatePharmacienAction);
router.get('/get/:id', checkAuth('all'), pharmacienController.getPharmacienByIdAction);
router.get('/all', checkAuth('admin'), pharmacienController.getPharmaciensAction);

module.exports = router;
