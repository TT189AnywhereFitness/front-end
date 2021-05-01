import React, { useState } from "react";
import axios from "axios";
import {
  StyledDiv,
  Form,
  StyledLabel,
  StyledInput,
  StyledButton,
} from "./styled";

const initialFormValues = {
  username: "",
  password: "",
  authorization: "",
};

const Signup = (props) => {
  const [formValues, setFormValues] = useState(initialFormValues);
  // const [terms, setTerms] = useState(initialTerms);

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
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
    axios
      .post(" REGISTRATION API HERE ", formValues)
      .then((res) => {
        props.history.push("/login");
        console.log("register post:", res.data);
      })
      .catch((err) => {
        console.log("register error:", err);
      });
  };

  return (
    <StyledDiv>
      <Form onSubmit={signup}>
        <StyledLabel>
          {" "}
          Username:
          <StyledInput
            type="text"
            name="username"
            values={formValues.username}
            onChange={handleChange}
          />
        </StyledLabel>
        <StyledLabel>
          Password:
          <StyledInput
            type="password"
            name="password"
            values={formValues.password}
            onChange={handleChange}
          />
        </StyledLabel>
        <StyledLabel>
          {" "}
          Authorization Code:
          <StyledInput
            type="text"
            name="authorization"
            values={formValues.authorization}
            onChange={handleChange}
          />
        </StyledLabel>
        <StyledButton>Signup</StyledButton>
      </Form>
    </StyledDiv>
  );
};

export default Signup;

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
