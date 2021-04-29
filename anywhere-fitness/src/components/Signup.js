import React from "react";


const Signup = (props) => {

  const { name, value, type } = props


  

  return (
  <div id="signup">Signup
    <form className="signup form">
      <button>Submit</button>
      <label>Username</label> 
        <input 
          name="username"
          //value={value.username}
          type="text"
          placeholder="type your username"
        />
      
      <label>Password</label>
        <input 
          name="password"
          //value={value.password}
          type="text"
          placeholder="type your password"
        />
      
      <label>Authorization Code</label>
        <input 
          name="authorization"
          //value={value.authorization}
          type="text"
          placeholder="Instructors enter code here"
        />
      
    </form>
  </div>
    

  );
};

export default Signup;
