import { useState } from "react"
import { useDispatch } from "react-redux"
import React from "react"
import * as SessionActions from '../../store/session'
import DemoUser from "../DemoUser/DemoUser";
import './SignupForm.css'

const SignupFormPage = () =>{
    const dispatch = useDispatch()
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [errors, setErrors] = useState([])
    
    // let emailAddress;
    // let firstName;
    // let pass1
    // let pass2
    // useEffect(() => {
    //   email = document.getElementById('email')
    //   password2 = document.getElementById('password')
    // }, [])
    // useEffect(() => {
    //   email = document.getElementById('email')
    //   password2 = document.getElementById('password')
    // }, [credential, password])
    
    // function checkInputs(){
    //   if(credential.length === 0) {
    //     //show error
    //     //add error class
    //     setErrorFor(email, "Email can't be blank")
    //   }else{
    //     setSuccessFor(email)
    //   }
    //   if(password.length === 0) {
    //     setErrorFor(password2,"Password can't be blank")
    //   }else if(password.length < 6){
    //     setErrorFor(password2,"Password was incorrect ")
    //   }else{
    //     setSuccessFor(password2)
    //   }
    // }
  
    // function setSuccessFor(input){
    //   const formControl = input.parentElement;
    //   formControl.className = 'form-control'
    // }
  
    // function setErrorFor(input, message){
    //   const formControl = input.parentElement;
    //   const small = formControl.querySelector('small')
    //   //add error message inside small
    //   small.innerText = message
    //   //add error class
    //   formControl.className = 'form-control error'
    // }
    
    const handleSubmit = e => {
        e.preventDefault()
        if (password === confirmPassword) {
            setErrors([]);
            return dispatch(SessionActions.signup({email, username, password}))
            .catch(async (res)=> {
                let data;
                try {
                    data = await res.clone().json()
                } catch {
                    data = await res.text()
                }
                if (data?.errors) setErrors(data.errors);
                else if (data) setErrors([data]);
                else setErrors([res.statusText])
            })
        }
        return setErrors(['confirm password must be the same'])
    }
    
    return (
        <div>
        <p id="signup-title">Create your account</p>
        <p className='registration_is_easy'>Registration is easy.</p>
        <form className="SignupForm" onSubmit={handleSubmit}>
            <ul className="signup-errors">
                {errors.map(error => <li key={error}>{error}</li>)}
            </ul>
            <div className="signupElement">
            <label>Email address</label>
                <input 
                type="text"
                id="emailAddress"
                value = {email}
                onChange = { e => setEmail(e.target.value)} 
                require="true"/>
            </div>

            <div className="signupElement">
                <label>First name</label>
                <input 
                type="text"
                id='firstName'
                value = {username}
                onChange = { e => setUsername(e.target.value)} 
                require="true"/>
            </div>
            
            <div className="signupElement">
                <label>Password</label>
                <input 
                type="password"
                id='pass1'
                value = {password}
                onChange = { e => setPassword(e.target.value)} 
                require="true"/>
            </div>
            <div className="signupElement">
                <label>Confirm Password</label>
                <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                require="true"/>
            </div>

            <button className="register_button">Register</button>
            <div className="divider">
                <p className="or">OR</p> 
                <hr className="hr"/>
            </div>
        </form>
        <div>
        <DemoUser/>
        </div>
        </div>
    )
}

export default SignupFormPage