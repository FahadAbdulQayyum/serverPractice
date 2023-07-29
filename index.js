const express = require('express');
const routes = require('./routes');

const app = express();

const PORT = process.env.NODE || 8080;

app.use(express.json());
app.use('/', routes);

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT} PORT`);
})