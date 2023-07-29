const {loginUser} = require('../models/user');


const createUser = (email, password) => {
    const userId = Date.now();
    console.log('email, password, userId: ',email, password, userId);
    loginUser(email, password, userId);
}

module.exports = {
    createUser
}