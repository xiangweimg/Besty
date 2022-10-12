import { useState } from "react"
import { useDispatch } from "react-redux"
import React from "react"
import * as SessionActions from '../../store/session'
import './SignupForm.css'

const SignupFormPage = () =>{
    const dispatch = useDispatch()
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [errors, setErrors] = useState([])
    
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
        <form className="SignupForm" onSubmit={handleSubmit}>
            <ul>
                {errors.map(error => <li key={error}>{error}</li>)}
            </ul>
            <label className="signupElement">
                <p className="registerPage_text">Email address</p> 
                <input 
                type="text"
                value = {email}
                onChange = { e => setEmail(e.target.value)} 
                require="true"/>
            </label>
            <label className="signupElement">
                <p className="registerPage_text">First name</p> 
                <input 
                type="text"
                value = {username}
                onChange = { e => setUsername(e.target.value)} 
                require="true"/>
            </label>
            <label className="signupElement">
                <p className="registerPage_text">Password</p> 
                <input 
                type="password"
                value = {password}
                onChange = { e => setPassword(e.target.value)} 
                require="true"/>
            </label>
            <label className="signupElement">
                <p className="registerPage_text">Confirm Password</p> 
                <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                require="true"/>
            </label>
            <button className="register_button">Register</button>
            <div className="divider">
            <p className="or">OR</p> 
                <hr className="hr"/>
            </div>
        </form>
        </div>
    )
}

export default SignupFormPage