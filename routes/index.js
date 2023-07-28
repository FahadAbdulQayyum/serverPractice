const express = require('express');

const router = express.Router();

const User = require('./users');

router.use('/user', User);

module.exports = router;