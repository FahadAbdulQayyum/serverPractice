const express = require('express');
const path = require('path');
const routes = require('./routes');

const app = express();

const PORT = process.env.NODE || 8080;

app.use(express.static(path.join(process.cwd(),"public")));

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use('/', routes);

app.set("view engine","ejs");
app.set("views","views");

// Shows in terminal when server runs

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT} PORT!`);
})
