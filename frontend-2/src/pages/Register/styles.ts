import styled from "styled-components";

export const RegisterContainer = styled.div`
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

export const RegisterFormContainer = styled.form`
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
`;

export const RegisterFormButton = styled.button`
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