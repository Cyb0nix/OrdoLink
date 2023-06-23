const express = require('express');
const router = express.Router();
const userRepo = require('../utils/users.repository');
const tokenRepo = require('../utils/tokens.repository');
const { v4: uuidv4 } = require('uuid');
const { hashSync, compareSync } = require('bcrypt');

// ROUTE REGISTRATIONS
router.post('/register', createUserAction);
router.post('/login', loginUserAction);
router.post('/logout', logoutUserAction);
router.delete('/delete', deleteUserByIdAction);
router.put('/update', updateUserByIdAction);
router.get('/get', getUserByIdAction);
router.get('/all', getAllUsersAction);
router.get('/state', getUserStateAction);



async function createUserAction(request, response) {
    if (!await userRepo.checkExistsUser(request.body.email)) {
        console.log(request.body, 'mail');
        const hashed_password = hashSync(request.body.password, 10);
        const id = await userRepo.createUser(request.body.email, hashed_password, true, new Date(Date.now() + 1000 * 3600 * 24).toUTCString());
        console.log(id, 'id');
        if (id != null) {
            console.log('[',request.ip,'] CREATED User : ', id);
            response.status(200).json({info: "user created successfully", created_user: await userRepo.getUserById(id)});
        }
        else {
            response.status(400).json({error: "invalid request"});
        }
    }
    else {
        response.status(400).json({error: "email already taken"});
    }
}


async function loginUserAction(request, response) {
    const user = await userRepo.getUserByEmail(request.body.email);
    if (user != null && compareSync(request.body.password, user.password)) {
        await tokenRepo.deleteExpiredTokens();
        if (( token = await tokenRepo.addUserToken(user.id, uuidv4(), new Date(Date.now() + 1000 * 3600 * 24).toUTCString())) != null) {
            console.log('[',request.ip,'] LOGGED IN User : ', user.id);
            response.status(200).json({info: "user logged in successfully", token: token, user_id: user.id});
        }
        else {
            response.status(400).json({error: "invalid request"});
        }
    }
    else {
        response.status(400).json({token: null, error: "invalid credentials"});
    }
}

async function logoutUserAction(request, response) {
    const token = request.get("Authorization");
    console.log(request);
    console.log(token);
    const id = await tokenRepo.validateToken(token);
    if (id != null) {
        if (await tokenRepo.deleteToken(token) != null) {
            console.log('[',request.ip,'] LOGGED OUT User : ', id);
            response.status(200).json({info: "user logged out successfully", user_id: id});
        }
        else {
            response.status(400).json({error: "invalid request"});
        }
    }
    else {
        response.status(401).json({error: "invalid token"});
    }
}

async function deleteUserByIdAction(request, response) {
    const token = request.get("Authorization");
    const id = await tokenRepo.validateToken(token);
    if (id != request.params.id || userRepo.isAdminUser(id)) {
        if (await tokenRepo.deleteUserTokens(request.params.id) != null && await userRepo.deleteUser(request.params.id) != null) {
            console.log('[',request.ip,'] DELETED User : ', request.params.id);
            response.status(200).json({info: "user account deleted successfully", deleted_id: request.params.id});    
        }
        else {
            response.status(400).json({error: "invalid request"});
        }
    }
    else {
        response.status(401).json({error: "invalid token"});
    }
}

async function updateUserByIdAction(request, response) {
    const token = request.get("Authorization");
    const id = await tokenRepo.validateToken(token);
    if (id != null && (id == request.params.id || userRepo.isAdminUser(id))) {
        if (await userRepo.updateUser(request.params.id, request.body.email, request.body.password, request.body.pwd_is_tmp, request.body.tmp_pswd_creation_date) != null) {
            console.log('[',request.ip,'] UPDATED User : ', request.params.id);
            response.status(200).json({info: "user account updated successfully", updated_user: await userRepo.getUserById(request.params.id)});
        }
        else {
            response.status(400).json({error: "invalid request"});
        }
    }
    else {
        response.status(401).json({error: "invalid token"});
    }
}

async function getUserByIdAction(request, response) {
    const token = request.get("Authorization");
    const id = await tokenRepo.validateToken(token);
    if (id != null && (id == request.params.id || userRepo.isAdminUser(id))) {
        const user = await userRepo.getUserById(request.params.id);
        if (user != null) {
            console.log('[',request.ip,'] FETCHED User : ', request.params.id);
            response.status(200).json(user);
        }
        else {
            response.status(400).json({error: "invalid request"});
        }
    }
    else {
        response.status(401).json({error: "invalid token"});
    }
}



async function getAllUsersAction(request, response) {
    const token = request.get("Authorization");
    const id = await tokenRepo.validateToken(token);
    if (id != null && await userRepo.isAdminUser(id)) {
        const products = await productRepo.getAllProducts();
        if (products != null) {
            console.log('[',request.ip,'] FETCHED all products');
            response.status(200).json(products);
        }
        else {
            response.status(400).json({error: "invalid request"});
        }
    }
    else {
        response.status(401).json({error: "invalid token"});
    }
}

async function getUserStateAction(request, response) {
    const token = request.get("Authorization");
    const id = await tokenRepo.validateToken(token);
    if (id != null) {
        const user = await userRepo.getUserById(id);
        if (user != null) {
            console.log('[',request.ip,'] FETCHED User : ', id);
            response.status(200).json(user);
        }
        else {
            response.status(400).json({error: "invalid request"});
        }
    }
    else {
        response.status(401).json({error: "invalid token"});
    }
}


module.exports = router;



