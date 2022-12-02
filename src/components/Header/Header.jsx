import React from "react";
import {Button, Logo} from "../index";
import styled from "styled-components";
import {useTranslation} from "react-i18next";

export default function Header({isAuth, login, logout}) {
    const loginButtonProps = {
        fontSize: '1rem',
        transform: 'none',
        bgColor: 'transparent',
        brWidth: '0'
    }
    const { t } = useTranslation();

    return (
        <HeaderWrapper>
            <Logo/>
            <HeaderTitle>4GEEKS</HeaderTitle>
            <HeaderLoginWrapper>
                {
                    isAuth ?
                        <div>
                            <p>{login}</p>
                            <Button onClick={logout} {...loginButtonProps}>{t('header.logout')}</Button>
                        </div> :
                        <Button {...loginButtonProps}>{t('header.login')}</Button>
                }
            </HeaderLoginWrapper>
        </HeaderWrapper>
    );
}

const HeaderWrapper = styled.header`
  display: grid;
  grid-area: header;
  grid-template-columns: 40px 3fr 2fr;
  grid-template-rows: 1fr;
  align-items: center;
  background-color: ${props => props.theme.bgColorSecondary};
  color: ${props => props.theme.colorPrimary};
  padding: 0 20px;
  border-bottom: 1px solid ${props => props.theme.borderPrimary};
`

const HeaderTitle = styled.div`
  display: grid;
  font-size: 26px;
  font-weight: bold;
  color: ${props => props.theme.colorSecondary};
`

const HeaderLoginWrapper = styled.div`
  display: grid;
  justify-items: end;

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
  
  & button {
    display: grid;
    justify-content: end;
  }
`
