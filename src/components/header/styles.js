import styled from "styled-components";

import { Link } from "react-router-dom";

import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.header`
  grid-area: header;
  height: 105px;
  width: 100%;

  display: flex;
  justify-content: space-between;
  
  padding: 0px 80px;

  .profile-wrapper {
    display: flex;
    flex-direction: row;
    gap: 28px;

    margin-top: 28px;

    button {
      font-size: 36px;
      color: ${({theme}) => theme.COLORS.WHITE};

      background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};

      border: none;

      margin-top: 6px;
    }

    button:hover{
      filter: none;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    padding: 0 32px;
  }
`

export const Profile = styled(Link)`
  display: flex;
  align-items: center;

  >img{
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }

  >div{
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    line-height: 24px;
    
    span{
      font-size: 14px;
      color: ${({theme}) => theme.COLORS.GRAY_100};
    }

    strong{
      font-size: 18px;
      color: ${({theme}) => theme.COLORS.WHITE};
    }
  }
`
export const Logout = styled.button`
  border: none;
  background: none;

  >svg{
    color: ${({theme}) => theme.COLORS.GRAY_100};
    font-size: 28px;
  }
`