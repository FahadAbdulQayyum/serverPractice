const fs = require('fs');
const path = require('path');

const DataPath = path.join(process.cwd(), "models", "data.js");

const readData = () => {
    return new Promise((resolve, reject) => {
        fs.readFile(DataPath, (err, data) => {
            if(err) return reject(err);
            // resolve(data);
            resolve(JSON.parse(data.toString()));
        })
    })
}

const writeData = data => {
    return new Promise((resolve, reject) => {
        fs.writeFile(DataPath, JSON.stringify(data), (error) => {
            if(error) {
                reject(error);
            }
            resolve();
        })
    })
}

// const loginUser = (email, password, userId) => {
//     writeData([{email, password, userId}])
//     console.log('Data written!');
// }

const loginUser = async (email, password, userId) => {
    const users = await readData();
    const matched = users.find(u=> u.email === email);
    if(matched) {
        throw new Error("User with this email already exists!");
    } else {
        await writeData([...users, {email, password, userId}])
    }
}

// const loginUser = async (email, password, userId) => {
//     await writeData({email, password, userId})
//     console.log('Data written!');
// }

module.exports = {
    loginUser
}