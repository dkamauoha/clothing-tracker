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

    signInWithEmail = async () => {
        let emailInfo = await auth.signInWithEmailAndPassword(this.state.email, this.state.password);
            let user =  emailInfo.user;
            console.log(user);
            await this.setState({
                user: {
                    first_name: '',
                    last_name: '',
                    email: user.email,
                    profile_pic: user.photoURL,
                    auth_id: user.uid
                }
            });
            return this.state.user;
    }

    createUserWithEmail = async () => {
        let newAccount = await auth.createUserWithEmailAndPassword(this.state.email, this.state.password);
        let user = newAccount.user;
        await this.setState({
            user: {
                first_name: '',
                last_name: '',
                email: user.email,
                profile_pic: user.photoURL,
                auth_id: user.uid
            }
        });
        return this.state.user;
    }

    emailSignIn = () => {
        // let user = await this.signInWithEmail();
        // if (!user) {
        //     return this.createUserWithEmail();
        // }
        auth.signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(res => {
                let user = res.user;
                this.setState({
                    user: {
                        first_name: '',
                        last_name: '',
                        email: user.email,
                        profile_pic: user.photoURL,
                        auth_id: user.uid
                    }
                });
            })
            .catch(() => {
                auth.createUserWithEmailAndPassword(this.state.email, this.state.password)
                    .then(res => {
                        let user = res.user;
                        this.setState({
                            user: {
                                first_name: '',
                                last_name: '',
                                email: user.email,
                                profile_pic: user.photoURL,
                                auth_id: user.uid
                            }
                        });
                    })
                    .catch(err => {
                        console.log(err);
                    })
            })
        return this.state.user;
    }

    testMethod = () => {
        axios.get('/api/test').then(res => console.log(res.data));
    }

    render() {
        console.log(this.state.user);
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