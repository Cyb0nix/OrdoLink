const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const { checkAuth } = require('../utils/user.auth');


// ROUTE REGISTRATIONS
router.post('/register',checkAuth("medecin"), userController.createUserAction);
router.post('/login', userController.loginUserAction);
router.post('/logout', checkAuth("all"), userController.logoutUserAction);
router.delete('/delete', checkAuth("all"), userController.deleteUserByIdAction);
router.put('/update', checkAuth("all"), userController.updateUserByIdAction);
router.get('/get', checkAuth('all'), userController.getUserByIdAction);
router.get('/all', checkAuth('admin'), userController.getAllUsersAction);
router.get('/state',checkAuth("all"), userController.getUserStateAction);


module.exports = router;



