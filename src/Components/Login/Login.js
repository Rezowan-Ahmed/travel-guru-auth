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

    const handleSubmit = (e) => {
        if (user && loggedInUser.email && loggedInUser.password) {
            firebase.auth().createUserWithEmailAndPassword(loggedInUser.email, loggedInUser.password)
                .then(res => {
                    history.replace(from);
                    user.updateProfile({
                        displayName: loggedInUser.name,
                    })

                })
                .catch(function (error) {
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
                    const googleNewUser = { name: displayName, email: email }
                    setLoggedInUser(googleNewUser);
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

    const handleChange = (e) => {
        let emailValid = true;
        if (e.target.name === 'emails') {
            emailValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if (e.target.name === "password") {
            const passwordValid = e.target.value.length >= 6;
            emailValid = passwordValid;

        }
        if (emailValid) {
            const newUserInfo = { ...loggedInUser };
            newUserInfo[e.target.name] = e.target.value;
            setLoggedInUser(newUserInfo);
        }
    }

    const handleFacebookSignIn = () => {
        const fbProvider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(fbProvider).then(function (result) {
            const { displayName, email } = result.user;
            const fbSignInUser = { name: displayName, email };
            setLoggedInUser(fbSignInUser);
            history.replace(from);
        }).catch(function (error) {
            var errorMessage = error.message;
            console.log(errorMessage);
        });
    }


    const handleGoogleSignIn = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(googleProvider).then(function (result) {
            const { displayName, email } = result.user;
            const googleSignInUser = { name: displayName, email };
            setLoggedInUser(googleSignInUser);
            history.replace(from);
        }).catch(function (error) {
            var errorMessage = error.message;
            console.log(errorMessage);
        });
    }


    return (
        <div className='banner_wrap'>
            <div className='container'>
                <div className='row d-flex align-items-center'>
                    <div className='col-md-6 offset-3'>
                        <Form className='log_form' onSubmit={handleSubmit}>
                            <h4>Login</h4>
                            {user && <Form.Group >
                                <Form.Control name='name' onBlur={handleChange} className='form_border' type="text" placeholder="Enter Your Name" />
                            </Form.Group>}
                            <Form.Group >
                                <Form.Control name='emails' onBlur={handleChange} className='form_border' type="email" placeholder="UserName Or Email" />
                            </Form.Group>

                            <Form.Group >
                                <Form.Control name='password' onBlur={handleChange} className='form_border' type="password" placeholder="Password" />
                            </Form.Group>

                            <Form.Group className='forgot d-flex justify-content-between'>
                                <Form.Check type="checkbox" label="Remember Me " />
                                <Link className='password'>Forgot Password</Link>
                            </Form.Group>

                            <div className='d-flex justify-content-center login_btn'>
                                <input className='submit_btn' variant="primary" type="submit" value='Log In' />
                            </div>
                            <div className='text-center span_link'>
                                {user ?
                                    <span>You alrady have an account? <button className='btn btn-outline-warning' onClick={() => setUser(!user)}> Log in </button> </span> 
                                    :
                                     <span>Don’t have an account? <button className='btn btn-outline-warning' onClick={() => setUser(!user)}> Create an account</button> </span>
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




        // <div className="container">
        //     <div className="raw">
        //         <div className="container-wrapper">
        //             <div className="col-md-6 offset-md-4 form-div">
        //                 <Form id="form-register">
        //                     <h2 className="header-gap text-center">Create an account</h2>
        //                     <div className="form-group">
        //                         <label for="username">First Name</label>
        //                         <input type="text" name="username" className="form-control form-control-lg">
		// 			            </div>
        //                         <div className="form-group">
        //                             <label for="username">Last Name</label>
        //                             <input type="text" name="username" className="form-control form-control-lg">
		// 			            </div>
        //                             <div className="form-group">
        //                                 <label for="Email">Username or Email</label>
        //                                 <input type="email" className="form-control form-control-lg">
		// 			            </div>
        //                                 <div className="form-group">
        //                                     <label for="password">Password</label>
        //                                     <input type="password" name="password" className="form-control form-control-lg">
		// 			            </div>
        //                                     <div className="form-group">
        //                                         <label for="confirmpass">Confirm Password</label>
        //                                         <input type="password" name="password" className="form-control form-control-lg">
		// 			            </div>
        //                                         <div className="form-group">
        //                                             <input type="submit" name="submit" form="form-register" value="Create an account" className="btn btn-block" />
        //                                         </div>
        //                                         <p className="text-center pra-gap">
        //                                             Already have an account? <a className="login-color" href="#">Login</a>
        //                                         </p>

		// 		                            </Form>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </div>