
import React, { useState} from "react";
import './../styles/App.css';
import LoginForm from "./LoginForm";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      <LoginForm
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
      />
      {isLoggedIn && <p>You are logged in!</p>
}
    </div>
  )
}

export default App
