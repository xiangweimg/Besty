// import { useState } from "react"
// import { useDispatch } from "react-redux"
// import React from "react"
// import * as SessionActions from '../../store/session'

// const SignupFormPage = () =>{
//     const dispatch = useDispatch()
//     const [email, setEmail] = useState("")
//     const [username, setUsername] = useState("")
//     const [password, setPassword] = useState("")
//     const [confirmPassword, setConfirmPassword] = useState("")
//     const [errors, setErrors] = useState([])
    
//     const handleSubmit = e => {
//         e.preventDefault()
//         if (password === confirmPassword) {
//             setErrors([]);
//             return dispatch(SessionActions.signup({email, username, password}))
//             .catch(async (res)=> {
//                 let data;
//                 try {
//                     data = await res.clone().json()
//                 } catch {
//                     data = await res.text()
//                 }
//                 if (data?.errors) setErrors(data.errors);
//                 else if (data) setErrors([data]);
//                 else setErrors([res.statusText])
//             })
//         }
//         return setErrors(['confirm password must be the same'])
//     }
    
//     return (
//         <div>
//         <form onSubmit={handleSubmit}>
//             <ul>
//                 {errors.map(error => <li key={error}>{error}</li>)}
//             </ul>
//             <label>
//                 Username:
//                 <input 
//                 type="text"
//                 value = {username}
//                 onChange = { e => setUsername(e.target.value)} 
//                 require/>
//             </label>
//             <label>
//                 Email:
//                 <input 
//                 type="text"
//                 value = {email}
//                 onChange = { e => setEmail(e.target.value)} 
//                 require/>
//             </label>
//             <label>
//                 Password:
//                 <input 
//                 type="password"
//                 value = {password}
//                 onChange = { e => setPassword(e.target.value)} 
//                 require/>
//             </label>
//       <label>
//         Confirm Password
//         <input
//           type="password"
//           value={confirmPassword}
//           onChange={(e) => setConfirmPassword(e.target.value)}
//           required
//         />
//       </label>

//         <input type="submit" value="sign up" />
//         </form>
//         </div>
//     )
// }

// export default SignupFormPage