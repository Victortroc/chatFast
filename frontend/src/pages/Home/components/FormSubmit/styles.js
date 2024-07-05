import styled from "styled-components";

export const FormSubmitMain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
`;

export const FormContainer = styled.div`
  width: 100%;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  background-color: ${props => props.theme["blue-1000"]};

  div {
    display: flex;
    width: 100%;
    align-items: center;
    gap: 0.5rem;

    img {
      height: 32px;
      width: 32px;
    }
  }
`;

export const FormContainerInput = styled.textarea`
  flex: 1;
  height: 32px;
  font-size: 1.25rem;
  font-weight: 500;
  margin-top: 0.5rem;
  resize: none;
  outline: none;
  border: none;
  background: transparent;
  color: ${props => props.theme["blue-50"]};

  &::placeholder {
    color: ${props => props.theme["blue-50"]};
  }
`;

export const FormContainerButton = styled.button`
  display: flex;
  border: none;
  padding: 8px 12px;
  justify-content: center;
  align-items: center;
  border-radius: 99px;
  background-color: ${props => props.theme["blue-600"]};
  font-weight: 600;
  color: ${props => props.theme.white};

  &:hover {
    transition: background-color 0.2s;
    background-color: ${props => props.theme["blue-700"]};
  }
`;