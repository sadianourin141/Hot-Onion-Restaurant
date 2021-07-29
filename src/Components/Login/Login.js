import React,{useContext} from 'react';
import  firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import Button from 'react-bootstrap/Button';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import './Login.css';
if(firebase.apps.length===0){
firebase.initializeApp(firebaseConfig);}

const Login = () => {
    const [loggedInUser,setLoggedInUser]=useContext(UserContext);
    const history=useHistory();
    const location=useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    var provider = new firebase.auth.GoogleAuthProvider();
    
    const handleGoogleSignIn=()=>{
       
        firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;
    const {displayName,email}=result.user;
    const signedInUser={name:displayName,email}
    setLoggedInUser(signedInUser);
    history.replace(from);

    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    console.log(user);
    // ...
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
    }
   
    return (
        <div className="button-style">
            <h1>Log in here for more details</h1>
            <Button variant="warning" onClick={handleGoogleSignIn}>google sign in</Button>
        </div>
    );
};

export default Login;