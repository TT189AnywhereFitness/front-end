import React, { useState } from "react";
import axios from "axios";
import styled from 'styled-components';

const initialFormValues = {
  username: '',
  password: '',
  authorization: ''
};

const initialTerms = {
  terms: false,
}

const Signup = (props) => {
  const [formValues, setFormValues] = useState(initialFormValues);
  // const [terms, setTerms] = useState(initialTerms);

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    })
  };

  // const flipTerms = () => {
  //   if(!terms) {
  //     setTerms(true);
  //   }
  //   else if(terms) {
  //     setTerms(false);
  //   }
  //   console.log(terms);
  // };

  const signup = (e) => {
    e.preventDefault();
    axios.post(' REGISTRATION API HERE ', formValues)
    .then(res => {
      props.history.push('/login');
      console.log('register post:', res.data);
    })
    .catch(err => {
      console.log('register error:', err)
    })
  }

  return(
    <div>
      <StyledForm onSubmit={signup}>
                <StyledLabel>Username</StyledLabel>
                <StyledInput
                type='text'
                name='username'
                value={formValues.username}
                onChange={handleChange}
                />
                <StyledLabel>Password</StyledLabel>
                <StyledInput
                type='password'
                name='password'
                value={formValues.password}
                onChange={handleChange}
                />
                <StyledLabel>Authorization Code</StyledLabel>
                <StyledInput
                type='text'
                name='authorization'
                value={formValues.authorization}
                onChange={handleChange}
                />
                <div>
                    <StyledButton>Submit</StyledButton>
                </div>
      </StyledForm>
    </div>
  )
}

export default Signup;

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 60vh;
    border-radius: 10px;
    margin: auto;
    padding: 1rem;
    width: auto;
`;

const StyledButton = styled.button`
margin:10px;
width:80px;
height:30px;
border-radius:8px;
border:none;
background-color:white;
box-shadow: 3px 3px 3px rgba(0, 0, 0, .1);
`

const StyledLabel = styled.label`
    text-align:left;
    font-size:1.1rem;
`

const StyledInput = styled.input`
    width:250px;
    display:flex;
    text-align:left;
    border-radius:8px;
    border:none;
    background-color: #ececec;
    height:20px;
    `

// const Signup = (props) => {

//   const { name, value, type } = props


  

//   return (
//   <div id="signup">Signup
//     <form className="signup form">
//       <button>Submit</button>
//       <label>Username 
//         <input 
//           name="username"
//           //value={value.username}
//           type="text"
//           placeholder="type your username"
//         />
//       </label>
//       <label>Password
//         <input 
//           name="password"
//           //value={value.password}
//           type="text"
//           placeholder="type your password"
//         />
//       </label>
//       <label>Authorization Code
//         <input 
//           name="authorization"
//           //value={value.authorization}
//           type="text"
//           placeholder="Instructors enter code here"
//         />
//       </label>
//     </form>
//   </div>
    

//   );
// };


