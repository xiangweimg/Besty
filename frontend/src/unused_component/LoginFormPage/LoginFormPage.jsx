// import { useEffect, useState } from "react"
// import { useDispatch, useSelector } from "react-redux"
// import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
// import { login } from "../../store/session"

// export default function LoginFormPage() {
//     const sessionUser = useSelector(state => state.session.user);// find current user in state.session
//     const [credential, setCredential] = useState("")
//     const [password, setPassword] = useState("")
//     const [validationErrors, setValidationErrors] = useState([])
//     const [hasSubmitted, setHasSubmitted] = useState(false)
    
//     const dispatch = useDispatch()
    
//     const handleSubmit = (e) => {
//         e.preventDefault()
//         setHasSubmitted(true)
//         if (validationErrors.length > 0) {alert("cannot submit")
//     } else {
//         dispatch(login({credential,password})) //will dispatch to LoginUser
//         setCredential("")
//         setPassword("")
//         setHasSubmitted(false)
//     } 
// }
    
//     useEffect(()=> {
//         const errors = [];
//         if (credential.length < 1) errors.push("please enter your username or email")
//         if (password.length < 1) errors.push("please enter your password")
//         {setValidationErrors(errors)}
//     }, [credential, password])

//     if (sessionUser) return <Redirect to="/" />

//     return (
//         <form onSubmit={handleSubmit}>
//             {hasSubmitted && validationErrors.length > 0 && (
//                     <div>
//                         The following errors were found:
//                         <ul>
//                             {validationErrors.map((error) => {
//                                 return <li key={error}> {error} </li>
//                             })}
//                         </ul>
//                     </div>
//                 )
//             }

//             <label>username or email
//                 <input type="text" 
//                 value= {credential} 
//                 onChange={e => setCredential(e.target.value)}
//                 />
//             </label>
//             <label>Password
//                 <input type="password" 
//                 value= {password} 
//                 onChange={e => setPassword(e.target.value)}
//                 />
//             </label>

//             <input type="submit">Sign in</input>
//         </form>
//     )
// }