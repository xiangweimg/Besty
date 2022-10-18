import React from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";
import "./DemoUser.css"

function DemoUser() {
    const dispatch = useDispatch()

    const handleClick = (e) => {
        // debugger
        e.preventDefault();
        return dispatch(sessionActions.login(
            { credential: "Demo-lition", 
            password: "password" }
            ))};

    return(
        <button onClick={handleClick} className="demo_button" 
        type="submit">Demo User</button>
    )
}

export default DemoUser