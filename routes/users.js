const express = require('express');

const router = express.Router();

const {login, signin} = require('../controllers/user');

router.post('/', async (req, res) => {
    try {
        const resp = await login(req?.body?.email, req?.body?.password);
        console.log('resp',resp);
        // res.status(200).send(req.body);
        // console.log('donnne');
        // res.status(200).send("User added successfully!");
        res.status(200).send(resp);
    } catch (err) {
        console.log('err',err);
        res.send(err.message);
    }
})

router.post('/signin', async (req, res) => {
    try {
        const resp = await signin(req?.body?.email, req?.body?.password);
        res.status(200).send(resp);
        // res.status(200).send("User added successfully!");
    } catch (err) {
        res.send(err);
    }
})

module.exports = router;