const express = require('express');

const router = express.Router();

const {createUser} = require('../controller');

// router.use('/', User);
router.use('/', async (req, res) => {
    try {
        const resp = await createUser(req?.body?.email, req?.body?.password);
        console.log('resppp:',resp);
        // User(req?.body?.email, req?.body?.password);
        // res?.status(200)?.send(req?.body)
        res?.status(200)?.send(resp);
    } catch (err) {
        res?.send(err.message);
    }
});

module.exports = router;