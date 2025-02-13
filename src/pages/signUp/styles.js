import styled from "styled-components";

import backgroundImg from "../../assets/background.png";

import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    flex-direction: column;
    justify-content: center;
  }
`

export const Form = styled.form`
  padding: 0px 136px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

  >h1{
    font-size: 48px;
    color: ${({theme}) => theme.COLORS.ORANGE};
  }

  >h2{
    font-size: 24px;
    margin: 48px 0px;
  }

  >p{
    font-size: 14px;
    color: ${({theme}) => theme.COLORS.GRAY_100};
  }

  >a{
    margin-top: 124px;
    color: ${({theme}) => theme.COLORS.ORANGE};
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    padding: 0 32px;
  
    flex-direction: column;
    justify-content: center;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    padding: 0 18px;
  
    flex-direction: column;
    justify-content: center;
  }
`

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    display: none;

    width: 1px;
    height: 1px;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    display: none;

    width: 1px;
    height: 1px;
  }
`