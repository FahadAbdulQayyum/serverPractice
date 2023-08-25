// importing the express framework
const express = require('express');
// importing the path
const path = require('path');
// importing the routes directory
const routes = require('./routes');

const app = express();

// Runs on port defined in the .env setup or here in this case, otherwise run on the 8080 
const PORT = process.env.NODE || 8080;

app.use(express.static(path.join(process.cwd(),"public")));

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use('/', routes);

app.set("view engine","ejs");
app.set("views","views");

// Shows in terminal when server runs

app.listen(PORT, () => {
    // This console will be shown in the terminal when server runs successfully!
    console.log(`Server is running on ${PORT} PORT!`);
})
