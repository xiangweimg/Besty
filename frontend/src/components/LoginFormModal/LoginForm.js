import React, { useEffect, useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import DemoUser from "../DemoUser/DemoUser";
import './LoginForm.css';
import { Redirect } from "react-router-dom";


function LoginForm() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");

  let email;
  let password2;
  
  useEffect(() => {
    email = document.getElementById('email')
    password2 = document.getElementById('password')
  }, [])

  useEffect(() => {
    email = document.getElementById('email')
    password2 = document.getElementById('password')
  }, [credential, password])
  
  function checkInputs(){
    if(credential.length === 0) {
      //show error
      //add error class
      setErrorFor(email, "Email can't be blank")
    }else{
      setSuccessFor(email)
    }
    if(password.length === 0) {
      setErrorFor(password2,"Password can't be blank")
    }else if(password.length < 6){
      setErrorFor(password2,"Password was incorrect ")
    }else{
      setSuccessFor(password2)
    }
  }

  function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control'
  }

  function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')
    //add error message inside small
    small.innerText = message
    //add error class
    formControl.className = 'form-control error'
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    checkInputs()
    return dispatch(sessionActions.login({ credential, password }))
      .catch(async (res) => {
        let data;
        try {
          // .clone() essentially allows you to read the response body twice
          data = await res.clone().json();
        } catch {
          data = await res.text(); // Will hit this case if, e.g., server is down
        }
      });
  };
  
  return (
    <>
      <form className="login_form" id = "form" onSubmit={handleSubmit} method='post' name = 'form'>
        <div className="form-control">
          <label className="login-element">Email address</label>
          <input
            type="text"
            value={credential}
            id='email'
            onChange={(e) => setCredential(e.target.value)}/>
          <small id="email_error"></small>
        </div>

        <div className="form-control">
          <label className="login-element">Password</label >
          <input
            type="password"
            value={password}
            id='password'
            onChange={(e) => setPassword(e.target.value)}/>
          <small id="password_error"></small>
        </div>
        <button className="signin_button" type="submit">Sign in</button>
      </form>

      <div className="divider">
        <p className="or-login">OR</p> 
        <hr className="hr-login"/>
      </div>

      <div>
        <DemoUser/>
      </div>

    </>
  );
}

export default LoginForm;