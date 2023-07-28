const express = require('express');

const app = express();

const PORT = process.env.NODE || 8080;

const bodyParser = require('body-parser');

// app.use(express.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/',require('./routes'));

app.listen(PORT, () => {
    console.log('Server is running on '+PORT+' port.');
})