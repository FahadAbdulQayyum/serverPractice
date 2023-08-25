// importing the express framework
const express = require('express');
// importing the path
const path = require('path');
// importing the routes directory
const routes = require('./routes');

const app = express();

// Runs on port defined in the .env setup or here in this case, otherwise run on the 8080 
const PORT = process.env.NODE || 8080;

// Path specified for any random change it desired by developer
app.use(express.static(path.join(process.cwd(),"public")));

// app use the express framework for fetching the data and making it presentable according to its type i.e., json
app.use(express.json());
// app uses the express to make the data into valid json
app.use(express.urlencoded({extended:false}));
app.use('/', routes);

// EJS - Embedded JavaScript applicable setup for server too when needed
app.set("view engine","ejs");
app.set("views","views");

// Shows in terminal when server runs

app.listen(PORT, () => {
    // This console will be shown in the terminal when server runs successfully!
    console.log(`Server is running on ${PORT} PORT!`);
})
