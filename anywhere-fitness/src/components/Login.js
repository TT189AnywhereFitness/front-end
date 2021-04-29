import React from "react";

const Login = (props) => {

  const { values } = props

  // const onChange = evt => {
  //   const { name, value, type } = evt.target
  // }

  return (
  <div id="login">Login
    <form className="login form">
      <button>Submit</button>
      <label>Username </label>
        <input 
          name="username"
          //value={values.username}
          type="text"
          placeholder="type your username"
          //onChange={onChange}
        />
      
      <label>Password</label>
        <input 
          name="password"
          //value={values.password}
          type="password"
          placeholder="type your password"
          //onChange={onChange}
        />
      
      <label>Authorization Code</label>
        <input 
          name="authorization"
          //value={values.authorization}
          type="text"
          placeholder="Instructors enter code here"
          //onChange={onChange}
        />
      
    </form>
  </div>

  )
};

export default Login;
