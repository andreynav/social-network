import React from "react";
import {logo} from "../../assets/index"
import {Button} from "../index";
import styled from "styled-components";

export default function Header(props) {
    const {isAuth, login, logout} = props;
    const loginButtonProps = {
        fontSize: '1rem',
        transform: 'none',
        bgColor: 'transparent',
        color: '#cdd9e5',
        brWidth: '0'
    }

    return (
        <HeaderWrapper>
            <LogoWrapper>
                <img src={logo} alt="logo"/>
            </LogoWrapper>
            <HeaderTitle>
                <p>4GEEKS</p>
            </HeaderTitle>
            <HeaderLoginWrapper>
                {
                    isAuth ?
                        <div>
                            <p>{login}</p>
                            <Button onClick={logout} {...loginButtonProps}>Logout</Button>
                        </div> :
                        <Button {...loginButtonProps}>Login</Button>
                }
            </HeaderLoginWrapper>
        </HeaderWrapper>
    );
}

const HeaderWrapper = styled.header`
  display: grid;
  grid-template-columns: 50px 4fr 1fr;
  grid-template-rows: 1fr;
  align-items: center;
  grid-area: header;
  background-color: ${props => props.theme.bgColorPrimary};
  color: ${props => props.theme.colorPrimary};
  padding: 0 20px;
  border-bottom: 1px solid ${props => props.theme.borderPrimary};
`

const LogoWrapper = styled.div`
  display: grid;
  grid-column: 1/2;
  grid-row: 1/2;

  & img {
    justify-self: center;
    align-self: center;
    height: 50px;
    width: 50px;
  }
`

const HeaderTitle = styled.div`
  font-size: 24px;
  padding-left: 10px;
  display: grid;
  grid-column: 2/3;
  grid-row: 1/2;
  color: ${props => props.theme.colorPrimary};
  
  & > p {
    justify-self: start;
    align-self: center;
  }

`

const HeaderLoginWrapper = styled.div`
  display: grid;
  grid-column: 3/4;
  grid-row: 1/2;
  justify-self: end;
  
  & div {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 1fr 1fr;
  }
  
  & p {
    display: grid;
    align-content: center;
    color: ${props => props.theme.colorSecondary};
  }
`
