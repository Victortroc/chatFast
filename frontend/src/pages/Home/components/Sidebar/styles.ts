import styled from "styled-components";

export const OpenBtn = styled.div`
  background-color: ${props => props.theme["blue-50"]};
  position: absolute;
  z-index: 99;
  right: calc(0.75rem * -1.5);
  top: 0.5rem;
  padding: 0.5rem 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  box-shadow: 7px 7px 30px 10px rgba(0, 0, 0, 0.4);

  svg {
    color: ${props => props.theme["blue-1100"]};
  }
`;

export const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  height: 100%;
  padding: 1.5rem;
  clip-path: inset(0 75% 0 0);
  transition: clip-path 1.25s ease-in;
`;

export const SideBarContainer = styled.aside`
  height: 100dvh;
  width: 75px;
  background-color: ${props => props.theme["blue-900"]};
  color: ${props => props.theme["blue-50"]};
  position: fixed;
  transition: width 1.25s ease-in;

  svg {
    transition: transform 0.5s;
  }

  &[data-state="sidebar-active"] {
    width: 300px;

    div${OpenBtn} svg {
      transform: rotate(180deg);
    }

    div${ItemsContainer} {
      clip-path: inset(0 0% 0 0);
    }
  }
`;

export const ItemsContainerTop = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  position: relative;
  overflow: hidden;
`;

export const ItemsHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 1.5rem;
`;

export const HeaderLogo = styled.div`
  height: 2.5rem;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const HeaderDetails = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  :first-child {
    font-size: 18px;
  }

  :last-child {
    font-size: 14px;
  }
`;

export const SidebarNav = styled.nav`
  ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    row-gap: 1rem;
  }

  a {
    font-size: 1.25rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    border: none;
    border-radius: 0.75rem;
    column-gap: 1.5rem;
    padding-block: 0.5rem;
    padding-inline: 0.75rem;
    text-decoration: none;
    color: ${props => props.theme.white};

    &:hover {
      transition: background-color 0.25s;
      background-color: ${props => props.theme["blue-600"]};
    }
  }
`;

export const LogoutBtn = styled.button`
  font-size: 1.25rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  border: none;
  border-radius: 0.75rem;
  column-gap: 1.5rem;
  padding-block: 0.5rem;
  padding-inline: 0.75rem;
  text-decoration: none;
  color: ${props => props.theme.white};
  background-color: transparent;

  &:hover {
    transition: background-color 0.25s;
    background-color: ${props => props.theme["blue-600"]};
  }
`;