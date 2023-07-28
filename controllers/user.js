const { createUser, findUser } = require("../models/user");

const login = async (email, password) => {
    try {
        const userId = Date.now();
        return await createUser(email, password, userId);

    } catch (err) {
        throw err;
    }
}

const signin = async (email, password) => {
    try {
        const user = await findUser(email);
        if(!!user && user.password === password) {
            return "Signned In Successfully!";
        }
        return "Wrong authentication!";
    } catch (err) {
        
    }
}

module.exports = {login,signin}