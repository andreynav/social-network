import React from "react";
import styled from "styled-components";
import {useTranslation} from "react-i18next";

export const Footer = () => {
    const {t} = useTranslation()

    return (
        <FooterWrapper>
            <FooterAddress>
                <a>{t("footer.email")}: nav.testsw@gmail.com</a>
            </FooterAddress>
            <FooterAddress>
                <a>{t("footer.phone")}: +375 29 6066602</a>
            </FooterAddress>
        </FooterWrapper>
    );
}

const FooterWrapper = styled.footer`
  display: grid;
  grid-area: footer;
  grid-column: 1/5;
  padding: 5px 20px;
  background-color: ${props => props.theme.bgColorSecondary};
  border-top: 1px solid ${props => props.theme.borderPrimary};
`

const FooterAddress = styled.div`
  justify-self: end;
  align-self: center;
  
  & a {
    color: ${props => props.theme.colorPrimary};
  }
`