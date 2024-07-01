import styled from "styled-components";

export const PostContainer = styled.div`
  display: flex;
  padding: 12px;
  align-items: flex-start;
  width: 100%;
  border-radius: 8px;
  gap: 1.25rem;
  padding: 1rem 0.5rem;
  background-color: ${props => props.theme["blue-1000"]};

  img {
    height: 32px;
    width: 32px;
  }
`;

export const PostContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  gap: 1rem ;
`;

export const Username = styled.div`
  display: flex;
  align-items: left;
  gap: 0.25rem;

  span {
    font-size: 14;
    color: ${props => props.theme["blue-400"]};
  }
`;

export const PostFooter = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const PostButtons = styled.div`
  display: flex;
  gap: 1rem;
`;

export const PostButtonContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;