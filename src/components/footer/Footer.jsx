import React from "react";
import styled from "styled-components";

export default function Footer() {
    return (
        <FooterWrapper>
            <FooterAddress>
                <a>Email: nav.testsw@gmail.com</a>
            </FooterAddress>
            <FooterAddress>
                <a>Phone: +375 29 6066602</a>
            </FooterAddress>
        </FooterWrapper>
    );
}

const FooterWrapper = styled.footer`
  display: grid;
  grid-area: footer;
  grid-column: 1/5;
  padding: 5px 20px;
  background-color: ${props => props.theme.bgColorPrimary};
  border-top: 1px solid ${props => props.theme.borderPrimary};
`

const FooterAddress = styled.div`
  justify-self: end;
  align-self: center;
  
  & a {
    color: ${props => props.theme.colorPrimary};
  }
`