import React, { useState } from 'react'
import Fade from 'react-reveal/Fade';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase';
import { useNavigate } from 'react-router-dom';

function Login() {

  const auth = getAuth(app);
  const navigate = useNavigate();

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  const signup = () => {
    createUserWithEmailAndPassword(auth, email, password)
   .then((userCredential) => {
     // Signed in 
     const user = userCredential.user;
     console.log(user);
     alert("Successfully created an account")
     // ...
   })
   .catch((error) => {
     const errorCode = error.code;
    //  const errorMessage = error.message;
    alert(errorCode)
     // ..
   });
  }

  const signin = () => {
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    alert("This user has Successfully sign in")
    navigate("/");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    // const errorMessage = error.message;
    alert(errorCode)
  });
  }

  return (
    <div className='form-container'>
      <Fade left>
      <input type={'email'} placeholder='please enter your email' onChange={(e) => setEmail(e.target.value)}/>
       <input type={'password'} placeholder='please enter your Password' onChange={(e) => setPassword(e.target.value)}/>

       <button onClick={signup}>Create Account</button>
       <button onClick={signin}>Sign In</button>
       </Fade>
    </div>
  )
}

export default Login