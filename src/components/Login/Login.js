import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
    state = {

    };

    login = () => {
        let { REACT_APP_DOMAIN, REACT_APP_CLIENT_ID } = process.env;
        let url = `${window.location.origin}/auth/callback`;
        window.location = `https://${REACT_APP_DOMAIN}/authorize?client_id=${REACT_APP_CLIENT_ID}&scope=openid%20email&redirect_uri=${url}&response_type=code`;
    }

    testMethod = () => {
        axios.get('/api/test').then(res => console.log(res.data));
    }

    render() {
        return (
            <main>
                <h2>Login</h2>
                <button onClick={this.login}>Test</button>
            </main>
        )
    }
}

export default Login;