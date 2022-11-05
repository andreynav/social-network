import React from "react";
import styled from "styled-components";

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
  color: ${({color = '#7e7e7e'}) => color === 'error' ? '#E3242B' : color};
`