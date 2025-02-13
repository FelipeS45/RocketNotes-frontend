import styled from "styled-components";

import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  width: 100%;

  >header{
    width: 100%;
    height: 144px;

    background: ${({theme}) => theme.COLORS.BACKGROUND_900};

    display: flex;
    align-items: center;

    padding: 0px 124px;

    svg{
      color: ${({theme}) => theme.COLORS.GRAY_100};
      font-size: 24px;      
    }

    button{
      background: none;
      border: none;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    header {
      padding: 0 24px;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    header {
      padding: 0 32px;
    }
  }
`

export const Form = styled.form`
  max-width: 340px;
  margin: 30px auto 0;

  >div:nth-child(4){
    margin-top: 36px;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    padding: 0 24px;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    padding: 0 32px;
  }
`

export const Avatar = styled.div`
  position: relative;
  margin: -122px auto 32px;

  width: 186px;
  height: 186px;

  >img{
    width: 186px;
    height: 186px;
    border-radius: 50%;
  }

  >label{
    width: 48px;
    height: 48px;
    border-radius: 50%;

    background-color: ${({theme}) => theme.COLORS.ORANGE};

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 7px;
    right: 7px;

    cursor: pointer;

    input{
      display: none;
    }

    svg{
      width: 20px;
      height: 20px;

      color: ${({theme}) => theme.COLORS.BACKGROUND_800};
    }
  }
` 