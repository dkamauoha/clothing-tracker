const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const massive = require('massive');
require('dotenv').config();

const app = express();

//Middlewares
app.use(bodyParser.json());

//Destructuring from .env
const { SERVER_PORT } = process.env;


app.listen(SERVER_PORT, () => console.log(`Server running on Port: ${SERVER_PORT}`))