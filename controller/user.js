const {loginUser} = require('../models/user');

const createUser = async (email, password) => {
    try {
        const userId = Date.now();
        console.log('email, password, userId: ',email, password, userId);
        // await loginUser(email, password, userId);
        const res = await loginUser(email, password, userId);
        console.log('resss:',res);
        return res;
    } catch (err) {
        throw err;
    }
}

module.exports = {
    createUser
}