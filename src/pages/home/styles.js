import styled from "styled-components";

import { Link } from "react-router-dom";

import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: ${({ menuIsOpen }) => (menuIsOpen ? "250px auto" : "0 auto")};
  grid-template-rows: 105px 128px auto 64px;
  grid-template-areas: 
    "menu header"
    "menu search"
    "menu content"
    "menu content"
  ;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`

export const Header = styled.div`
  grid-area: header;
`

export const Menu = styled.ul`
  grid-area: menu;
  text-align: center;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  width: ${({ menuIsOpen }) => (menuIsOpen ? "250px" : "0")};
  overflow: hidden;

  > li {
    margin-bottom: 24px;
  }

  .brand {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 24px;
    padding: 0 18px;
    margin: 24px 0 64px 0;

    .logo > h1 {
      font-size: 24px;
      color: ${({ theme }) => theme.COLORS.ORANGE};
    }

    button {
      font-size: 36px;
      color: ${({ theme }) => theme.COLORS.WHITE};
      margin-top: 10px;
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
      border: none;
    }

    button:hover {
      filter: none;
    }
  }
`

export const Search = styled.div`
  grid-area: search;
  padding: 28px 60px;

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    padding: 28px 32px;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    padding: 28px 24px;
  }
`

export const Content = styled.div`
  grid-area: content;
  padding: 0px 60px;
  overflow-y: auto;

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    padding: 0 32px;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    padding: 0 24px;
  }
`

export const NewNote = styled(Link)`
  background-color: ${({ theme }) => theme.COLORS.ORANGE};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 86px;
  width: 250px;
  position: fixed;
  bottom: 0;

  > svg {
    margin-right: 8px;
  }
`
