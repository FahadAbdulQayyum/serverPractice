const express = require('express');

const router = express.Router();

const {createUser} = require('../controller');

// router.use('/', User);
router.use('/', (req, res) => {
    // User(req?.body?.email, req?.body?.password);
    createUser(req?.body?.email, req?.body?.password);
    res?.status(200)?.send(req?.body)
});

module.exports = router;