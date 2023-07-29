const express = require('express');

const router = express.Router();

const User = require('./user');

router.post('/user', User);

module.exports = router;