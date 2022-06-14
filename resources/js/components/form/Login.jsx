import React from 'react'
import ReactDOM from "react-dom";

const Login = () => {
  return (
    <div>Login</div>
  )
}

export default Login;
if (document.getElementById("login")) {
    ReactDOM.render(<Login />, document.getElementById("login"));
}