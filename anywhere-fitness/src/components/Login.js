import React from "react";

const Login = (props) => {

  const { name, value, type } = props

  return (
  <div id="login">Login
    <form className="login form">
      <button>Submit</button>
      <label>Username 
        <input 
          name="username"
          //value={value.username}
          type="text"
          placeholder="type your username"
        />
      </label>
      <label>Password
        <input 
          name="password"
          //value={value.password}
          type="text"
          placeholder="type your password"
        />
      </label>
      <label>Authorization Code
        <input 
          name="authorization"
          //value={value.authorization}
          type="text"
          placeholder="Instructors enter code here"
        />
      </label>
    </form>
  </div>

  )
};

export default Login;
