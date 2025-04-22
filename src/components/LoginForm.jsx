
import React from "react";


function LoginForm({ isLoggedIn, setIsLoggedIn }) {
    function handlesubmit(e) {
        e.preventDefault()
        setIsLoggedIn(true)
    }

    return (
      
        
        <div>
            <form onSubmit={handlesubmit}>
                <label>UserName:</label>
                <input type="text" placeholder="Username" />
                <label>Password:</label>
                <input type="password" placeholder="Password" />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}
export default LoginForm;