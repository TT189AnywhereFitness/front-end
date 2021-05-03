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

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
  flex-direction: column;
  text-align: left;
`;

export const StyledInput = styled.input`
  width: 250px;
  display: flex;
  text-align: left;
  border-radius: 8px;
  border: none;
  background-color: #ececec;
  height: 20px;
`;

export const StyledLabel = styled.label`
  text-align: left;
  font-size: 1.2rem;
`;
export const StyledButton = styled.button`
  margin: 10px;
  width: 80px;
  height: 30px;
  border-radius: 8px;
  border: none;
  background-color: white;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1);
`;
export const FlexRowDiv = {
  Center: styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: center;
    width: 100%;
  `,
  Start: styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
  `,
  End: styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
  `,
  Between: styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`,
};
