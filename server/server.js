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
const { SERVER_PORT, REACT_APP_CLIENT_ID, REACT_APP_CLIENT_SECRET, PROTOCOL, REACT_APP_DOMAIN } = process.env;

//Endpoints

//Auth0
// app.get('/auth/callback', async (req, res) => {
//     let payload = {
//         client_id: REACT_APP_CLIENT_ID,
//         client_secret: REACT_APP_CLIENT_SECRET,
//         code: req.query.code,
//         grant_type: 'authorization_code',
//         redirect_uri: `${PROTOCOL}://${req.headers.host}/auth/callback`
//     };
//     let resWithToken = await axios.post(`https://${REACT_APP_DOMAIN}/oath/token`, payload);
//     let resWithUserData = await axios.get(`https://${REACT_APP_DOMAIN}/userinfo?access_token=${resWithToken.data.access_token}`);
//     res.redirect('/#/')
// });

//test
app.get('/api/test', (req, res) => {
    res.send('Success');
});

app.listen(SERVER_PORT, () => console.log(`Server running on Port: ${SERVER_PORT}`))