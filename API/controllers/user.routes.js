const express = require('express');
const router = express.Router();
const userRepo = require('../utils/user.repository');
const pharmacienRepo = require('../utils/pharmacien.repository');


// ROUTE REGISTRATIONS
router.get('/:email', getUser);
router.get('/id/:id', getUserById);
router.post('/', createUser);
router.put('/', updateUser);

// ROUTE HANDLER FUNCTIONS
async function createUser(req, res) {
    try {
        const user = await userRepo.createUser(req.body);
        res.status(201).json(user);
    }
    catch (err) {
        res.status(500).json({ error: err });
    }
}

async function getUser(req, res) {
    console.log(req.params.email);
    try {
        const user = await userRepo.getUser(req.params.email);
        res.status(200).json(user);
    }
    catch (err) {
        res.status(500).json({ error: err });
    }
}

async function getUserById(req, res) {
    console.log(req.params.id);
    try {
        const user = await userRepo.getUserById(req.params.id);
        res.status(200).json(user);
    }
    catch (err) {
        res.status(500).json({ error: err });
    }
}

async function updateUser(req, res) {
    try {
        const user = await userRepo.updateUser(req.body);
        res.status(200).json(user);
    }
    catch (err) {
        res.status(500).json({ error: err });
    }
}

// test
module.exports = router;



