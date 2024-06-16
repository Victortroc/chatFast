import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;
  padding: 32px;
  
  img {
    height: 48px;
    width: 48px;
  }

  h1 {
    font-size: 24px;
  }
`;

export const LoginFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 320px;
  gap: 16px;
  padding: 24px;
  background-color: ${props => props.theme["blue-1050"]};
  border: 1px solid ${props => props.theme["blue-950"]};
  border-radius: 8px;

  input {
    padding: 12px;
    background: ${props => props.theme["blue-1100"]};
    border: 1px solid ${props => props.theme["blue-950"]};
    border-radius: 8px;
    color: ${props => props.theme["blue-50"]};
  }

  ::placeholder {
      color: ${props => props.theme["blue-50"]};
      font-weight: 300;
    }

  span {
    display: flex;
    justify-content: space-between;
    width: 100%;
    
    a {
      font-weight: bold;
      color: ${props => props.theme["blue-600"]};
      text-decoration: none;
    }
  }
`;

export const LoginFormButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border: none;
  border-radius: 8px;
  background-color: ${props => props.theme["blue-600"]};
  color: ${props => props.theme["blue-50"]};
  cursor: pointer;
  
  &:hover {
    transition: background-color 0.2s;
    background-color: ${props => props.theme["blue-700"]};
  }
`;

export const FormFooter = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SecondContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 320px;
  gap: 16px;
  padding: 24px;
  background-color: ${props => props.theme["blue-1050"]};
  border: 1px solid ${props => props.theme["blue-950"]};
  border-radius: 8px;

  p {
    font-weight: 300;

    a {
      font-weight: bold;
      color: ${props => props.theme["blue-600"]};
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export const ButtonGoogle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  background-color: ${props => props.theme["blue-100"]};
  color: ${props => props.theme["blue-1100"]};
  width: 100%;

  img {
    height: 24px;
    width: 24px;
  }
`;