import React from "react";
import styled from "styled-components";
import {colorError} from "../../../styles/themes";

export const Label = (props) => {
    return (
        <StyledLabel {...props}>
            {props.children}
        </StyledLabel>
    )
}

const StyledLabel = styled.div`
  font-size: ${({fontSize = '12px'}) => fontSize};
  text-transform: ${({transform = 'uppercase'}) => transform};
  color: ${props => props.color === 'error' ? colorError : props.theme.bgColorSecondary};
`