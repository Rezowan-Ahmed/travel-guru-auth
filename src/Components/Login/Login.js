import React from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import google from '../../images/Icon/google.png';
import facebook from '../../images/Icon/fb.png'
import './Login.css';


const Login = () => {
    firebase.initializeApp(firebaseConfig);
    
    const handleFacebookSignIn = () => {
        const fbProvider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(fbProvider).then(function(result) {
            const {displayName, email} = result.user;
            const fbSignInUser = {name: displayName, email};
            console.log(fbSignInUser);
          }).catch(function(error) {
            var errorMessage = error.message;
            console.log(errorMessage);
          });
    }


    const handleGoogleSignIn = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(googleProvider).then(function(result) {
            const {displayName, email} = result.user;
            const googleSignInUser = {name: displayName, email};
            console.log(googleSignInUser);
          }).catch(function(error) {
            var errorMessage = error.message;
            console.log(errorMessage);
          });
    }


    return (
        <div style={{width:'300px', margin:'auto'}}>
            <p style={{textAlign:'center'}}>-------- Or --------</p>
            <div onClick={handleFacebookSignIn} style={{cursor:'pointer'}} className="fb_google">
                <img style={{width:'30px', height:'30px', marginRight:'10px'}} src={facebook} alt="facebook icon"/>
                <p>Continue with Facebook</p>
            </div>
            <div onClick={handleGoogleSignIn} style={{cursor:'pointer'}} className="fb_google">
                <img style={{width:'30px', height:'30px', marginRight:'10px'}} src={google} alt="google icon"/>
                <p>Continue with Google</p>
            </div>
        </div>
    );
};

export default Login;