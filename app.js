const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());

//Set Cors
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}))

//routes
const category = require('./routes/category');
const vehical = require('./routes/vehical');

//use
app.use('/category', category)
app.use('/vehical', vehical)

module.exports = app;