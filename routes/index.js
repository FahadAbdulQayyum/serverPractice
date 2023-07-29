const express = require('express');

const router = express.Router();

const User = require('./user');
const Form = require('./form');

router.post('/user', User);
router.use('/form', Form);

module.exports = router;