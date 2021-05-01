import styled from "styled-components";

// a repository for all styled components to maintain separation of logic

export const JumboP = styled.p`
  width: 100%;
  text-indent: 1rem;
`;

export const StyledDiv = styled.div`
  width: 50%;
  font-size: 1rem;
`;

export const StyledApp = styled.div`
  max-width: 100%;
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
  flex-direction: column;
  text-align: left;
`;

const StyledInput = styled.input`
  width: 250px;
  display: flex;
  text-align: left;
  border-radius: 8px;
  border: none;
  background-color: #ececec;
  height: 20px;
`;

const StyledLabel = styled.label`
  text-align: left;
  font-size: 1.2rem;
`;
const StyledButton = styled.button`
  margin: 10px;
  width: 80px;
  height: 30px;
  border-radius: 8px;
  border: none;
  background-color: white;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1);
`;
