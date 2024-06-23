import styled from "styled-components";

export const DefaultLayoutContainer = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr 400px;
  transition: 1.25s ease-in;

  &[data-state="sidebar-"] {
    grid-template-columns: 75px 1fr 400px;
  }
`;

