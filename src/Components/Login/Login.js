import React, { useContext, useState } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import google from '../../images/Icon/google.png';
import facebook from '../../images/Icon/fb.png'
import './Login.css';
import { UserContext } from '../../App';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { Form } from 'react-bootstrap';


const Login = () => {
    const [user, setUser] = useState(false);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    //Form submit
    const handleSubmit = (e) => {
        if (user && loggedInUser.email && loggedInUser.password) {
            firebase.auth().createUserWithEmailAndPassword(loggedInUser.email, loggedInUser.password)
                .then(res => {
                    history.replace(from);
                    user.updateProfile({
                        displayName: loggedInUser.name,
                    })

                })
                .catch(error => {
                    const newUserInfo = { ...loggedInUser };
                    newUserInfo.message = error.message;
                    newUserInfo.success = false;
                    setLoggedInUser(newUserInfo);
                });
        }
        if (!user && loggedInUser.email && loggedInUser.password) {
            firebase.auth().signInWithEmailAndPassword(loggedInUser.email, loggedInUser.password)
                .then(res => {
                    const { displayName, email } = res.user;
                    const fbGoogleSignInUser = { name: displayName, email }
                    setLoggedInUser(fbGoogleSignInUser);
                    history.replace(from);
                })
                .catch(error => {
                    const newUserInfo = { ...loggedInUser };
                    newUserInfo.message = error.message;
                    newUserInfo.success = false;
                    setLoggedInUser(newUserInfo);
                });
        }
        e.preventDefault();
    }

    //Email & Password validation 
    const handleChange = (e) => {
        let isFormValid = true;
        if (e.target.name === 'email') {
            isFormValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if (e.target.name === 'password') {
            const passwordValid = e.target.value.length >= 6;
            const passwordHasNumber = /\d{1}/.test(e.target.value);
            const isPasswordValid = passwordValid && passwordHasNumber;
            isFormValid = isPasswordValid;
        }
        if (isFormValid) {
            const newUserInfo = { ...loggedInUser };
            newUserInfo[e.target.name] = e.target.value;
            setLoggedInUser(newUserInfo);
        }
    }

    //Facebook sign in
    const handleFacebookSignIn = () => {
        const fbProvider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(fbProvider).then(function (result) {
            const { displayName, email } = result.user;
            const fbGoogleSignInUser = { name: displayName, email };
            setLoggedInUser(fbGoogleSignInUser);
            history.replace(from);
        }).catch(error => {
            const newUserInfo = { ...loggedInUser };
            newUserInfo.message = error.message;
            setLoggedInUser(newUserInfo);
        });
    }

    //Google sign in
    const handleGoogleSignIn = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(googleProvider).then(function (result) {
            const { displayName, email } = result.user;
            const fbGoogleSignInUser = { name: displayName, email };
            setLoggedInUser(fbGoogleSignInUser);
            history.replace(from);
        }).catch(error => {
            const newUserInfo = { ...loggedInUser };
            newUserInfo.message = error.message;
            setLoggedInUser(newUserInfo);
        });
    }


    return (
            <div className='banner_wrap'>
                <div className='container'>
                    <div className='row d-flex align-items-center'>
                        <div className='col-md-6 offset-3'>
                            <Form className='log_form' onSubmit={handleSubmit}>
                                {user ? <h4>Create an account</h4> : <h4>Login</h4>}
                                {user && <Form.Group >
                                    <Form.Control name='name' onBlur={handleChange} type="text" placeholder="Enter Your Name" required />
                                </Form.Group>}
                                <Form.Group >
                                    <Form.Control name='email' onBlur={handleChange} type="email" placeholder="Username or Email" required />
                                </Form.Group>

                                <Form.Group >
                                    <Form.Control name='password' onBlur={handleChange} type="password" placeholder="Password" required />
                                </Form.Group>

                                <Form.Group className='forgot d-flex justify-content-between'>
                                    <Form.Check type="checkbox" label="Remember Me " />
                                    <Link>Forgot Password</Link>
                                </Form.Group>

                                <div>
                                    <input className='login_submit_btn' variant="primary" type="submit" value='Login' />
                                </div>
                                <div className='text-center'>
                                    {user ?
                                        <span>You alrady have an account? <Link onClick={() => setUser(!user)} >Login</Link></span>
                                        :
                                        <span>Don’t have an account? <Link onClick={() => setUser(!user)}>Create an account</Link></span>
                                    }
                                </div>
                            </Form>
                        </div>
                    </div>
                    <div style={{ width: '300px', margin: 'auto' }}>
                        <p style={{ textAlign: 'center' }}>-------- Or --------</p>
                        <div onClick={handleFacebookSignIn} style={{ cursor: 'pointer' }} className="fb_google">
                            <img style={{ width: '30px', height: '30px', marginRight: '10px' }} src={facebook} alt="facebook icon" />
                            <p>Continue with Facebook</p>
                        </div>
                        <div onClick={handleGoogleSignIn} style={{ cursor: 'pointer' }} className="fb_google">
                            <img style={{ width: '30px', height: '30px', marginRight: '10px' }} src={google} alt="google icon" />
                            <p>Continue with Google</p>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Login;
