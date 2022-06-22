import React from "react";
import { auth, provider } from '../firebase-config';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from "react-router-dom";

function Login({setIsAuth}) {
  let navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((res) => {
      localStorage.setItem('isAuth', true)
      setIsAuth(true)
      navigate('/');
    })
  }
  return (
    <div className="loginPage">
      <p>Sign in with Google</p>
      <button className="login-with-google-btn" onClick={signInWithGoogle}>Sign In with Google</button>
    </div>
  )
}

export default Login;