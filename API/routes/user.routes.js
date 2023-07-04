const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const { checkAuth } = require('../utils/user.auth');


// ROUTE REGISTRATIONS
router.post('/register',checkAuth("admin"), userController.createUserAction);
router.post('/login', userController.loginUserAction);
router.post('/logout', userController.logoutUserAction);
router.delete('/delete/:id', checkAuth("all"), userController.deleteUserByIdAction);
router.put('/update/:id', checkAuth("all"), userController.updateUserByIdAction);
router.get('/get/:id', checkAuth('all'), userController.getUserByIdAction);
router.get('/all', checkAuth('admin'), userController.getAllUsersAction);
router.get('/state', userController.getUserStateAction);
router.get('/type/:id', checkAuth('all'), userController.getUserTypeIdAction);


module.exports = router;



