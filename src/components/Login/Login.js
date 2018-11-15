import React, { Component } from 'react';
import axios from 'axios';

import { auth, googleProvider } from '../../firebase';

//Style
import './Login.css';

class Login extends Component {
    state = {
        email: '',
        password: '',
        user: {}
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    googleLogin = async () => {
        let googleInfo = await auth.signInWithPopup(googleProvider);
        let user = googleInfo.user;
        let nameArr = user.displayName.split(' ');
        await this.setState({
            user: {
                first_name: nameArr[0],
                last_name: nameArr[1],
                email: user.email,
                profile_pic: user.photoURL,
                auth_id: user.uid
            }
        })
        await console.log(this.state.user);
    }

    emailSignIn = async () => {
        let emailInfo = await auth.signInWithEmailAndPassword(this.state.email, this.state.password);
        console.log(emailInfo);
    }

    testMethod = () => {
        axios.get('/api/test').then(res => console.log(res.data));
    }

    render() {
        console.log(this.state);
        return (
            <main className='login__display-container'>
                <h2>Login</h2>
                <div className='login__login-container'>
                    <button onClick={this.googleLogin}>Test</button>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <input 
                            placeholder='Email'
                            onChange={(event) => this.handleChange(event)}
                            name='email'
                        />
                        <input 
                            type='password' 
                            placeholder='Password'
                            onChange={(event) => this.handleChange(event)}
                            name='password'
                        />
                        <button onClick={this.emailSignIn}>Sign In</button>
                    </div>
                </div>
                
            </main>
        )
    }
}

export default Login;