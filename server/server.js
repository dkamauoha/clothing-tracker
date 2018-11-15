const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const massive = require('massive');
const axios = require('axios');
require('dotenv').config();

const app = express();

//Middlewares
app.use(bodyParser.json());

//Destructuring from .env
const { SERVER_PORT, SESSION_SECRET, CONNECTION_STRING } = process.env;

//Session Setup
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));

app.use((req, res, next) => {
    if (!req.session.user) {
        req.session.user = {
            name: '',
            email: '',
            user_id: '',
            profile_pic: ''
        };
    };
    next();
});

//Massive
massive(CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance);
    app.listen(SERVER_PORT, () => console.log(`Server running on Port: ${SERVER_PORT}`))
})

//Endpoints

//test
app.get('/api/test', (req, res) => {
    res.send('Success');
});
