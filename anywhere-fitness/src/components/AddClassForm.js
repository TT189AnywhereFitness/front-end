import React, { useState } from 'react';
import axios from "axios";
import styled from "styled-components";

const initialFormValues = {
    "class_id": null,
    "class_name": "",
    "type": "",
    "start_time": "",
    "duration": "",
    "occasion": "",
    "day": "",
    "intensity": "",
    "location": "",
    "max_size": "",
    "instructor": ""
}

function AddClassForm() {
    
    const [formValues, setFormValues] = useState(initialFormValues)

    const handleChange = e => {
        setFormValues({
            ...formValues,
            [e.target.name] : e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        axios.post("https://tt-189-anywhere-fitness-api.herokuapp.com/api/classes/", formValues)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <StyledDiv>
        <StyledContainer>
            <StyledForm onSubmit={onSubmit}>
                <label>Class Name:  
                    <input className="inputs"
                    type = "text"
                    name = "class_name"
                    values = {formValues.class_name}
                    onChange = {handleChange}/>
                </label><br></br>
                <label>Class Type:  
                    <input className="inputs"
                    type = "text"
                    name = "type"
                    values = {formValues.type}
                    onChange = {handleChange}/>
                </label><br></br>
                <label>Start Time:  
                    <input className="inputs"
                    type = "text"
                    name = "start_time"
                    values = {formValues.start_time}
                    onChange = {handleChange}/>
                </label><br></br>
                <label>Class Duration:  
                    <input className="inputs"
                    type = "text"
                    name = "duration"
                    values = {formValues.duration}
                    onChange = {handleChange}/>
                </label><br></br>
                <label>Occasion:  
                    <input className="inputs"
                    type = "text"
                    name = "occasion"
                    values = {formValues.occasion}
                    onChange = {handleChange}/>
                </label><br></br>
                <label>Day of The Week:  
                    <input className="inputs"
                    type = "text"
                    name = "day"
                    values = {formValues.day}
                    onChange = {handleChange}/>
                </label><br></br>
                <label>Class Intensity:  
                    <input className="inputs"
                    type = "text"
                    name = "intensity"
                    values = {formValues.intensity}
                    onChange = {handleChange}/>
                </label><br></br>
                <label>Class Location:  
                    <input className="inputs"
                    type = "text"
                    name = "location"
                    values = {formValues.location}
                    onChange = {handleChange}/>
                </label><br></br>
                <label>Maximum Class Size:  
                    <input className="inputs"
                    type = "text"
                    name = "max_size"
                    values = {formValues.max_size}
                    onChange = {handleChange}/>
                </label><br></br>
                <label>Class Instructor:  
                    <input className="inputs"
                    type = "text"
                    name = "instructor"
                    values = {formValues.instructor}
                    onChange = {handleChange}/>
                </label><br></br>
                <button>Submit</button>
            </StyledForm>
        </StyledContainer>
        </StyledDiv>
    )
}

export default AddClassForm;

const StyledDiv = styled.div ``

const StyledContainer = styled.div`
    justify-content: center;
    display: flex;
    align-items: right;
    text-align:right;
`
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  border: black 3px solid;
  border-radius: 10px;
  margin: 1rem;
  padding: 1rem;
  width: auto;
  .warning {
    color: red;
    font-weight: bold;
  }
  .inputItem {
    margin: 0.5rem;
    padding: 1rem;
  }
  .inputTerms {
    margin: 0.5rem 0.5rem 0 0;
    display: flex;
    flex-direction: row-reverse;
  }
  .inputItem label {
    float: left;
    padding: 1rem;
  }
  .inputItem input {
    width: 100%;
    margin-top: 0.5rem;
    box-sizing: border-box; // needed to make input box fit inside div
  }
  .inputItem button {
    float: right;
    width: 5rem;
  }
`;
// const AddClassForm = (props) => {
//     return ( <div id="addClassForm">AddClassForm Component</div> );
// }
 
