import { set } from "cypress/types/lodash";
import React from "react";


function LoginForm({ isLoggedIn, setIsLoggedIn }) {
    function handlesubmit(e) {
        e.preventDefault()
        setIsLoggedIn(true)
    }

    return (
      
        
        <div>
            <form onClick={handlesubmit}>
                <label>UserName:</label>
                <input type="text" placeholder="Username" />
                <label>Password:</label>
                <imput type="password" placeholder="Password" />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}
export default LoginForm;