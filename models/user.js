const fs = require("fs");
const path = require("path");

const dataPath = path.join(process.cwd(), "models", "data.js");

const readData = () => {
    return new Promise((resolve, reject) => {
        fs.readFile(dataPath, (err, data) => {
            if (err) {
                return reject(err);
            }
            resolve(JSON.parse(data.toString()));
            // resolve(data);
        })
    })
}

const writeData = (data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(dataPath, JSON.stringify(data), (err) => {
            if (err) {
                return reject(err);
            }
            resolve();
        })
    })
};

const createUser = async (email, password, userId) => {
    try {        
        // writeData({email, password})
        const users = await readData();
        const matched = users.find(u => u.email === email);
        // const matched = users.find(u => console.log('u.email',u.email,email, u.email===email));
        // const matched = users.filter(u => u.email === email);
        if(!!matched) {
            // throw new Error("user already exists!");
            return "User already exists";
        } else {
            await writeData([...users, {email, password, userId}])
            return "User created Successfully!";
        }
    } catch (err) {
        throw err;
    }
}

const findUser = async (email) => {
    try {
        const users = await readData();
        const matched = users.find(u=> u.email === email);
        return matched;
    } catch (err) {
        throw err;
    }
}

module.exports = {createUser,findUser};
