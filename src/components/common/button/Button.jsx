import React from "react";
import styled from "styled-components";

export const Button = (props) => {
    return (
        <StyledButton {...props}>
            {props.children}
        </StyledButton>
    )
}

const StyledButton = styled.button`
  display: grid;
  grid-area: ${({areaName}) => areaName};
  align-content: ${({alignContent = 'center'}) => alignContent};
  min-width: ${({minWidth = '100%'}) => minWidth};
  width: ${({width = '25px'}) => width};
  height: ${({height = '35px'}) => height};
  background-color: ${({bgColor = 'white'}) => bgColor};
  color: ${({color = 'black'}) => color};
  font-size: ${({fontSize = '12px'}) => fontSize};
  border-width: ${({brWidth = '1px'}) => brWidth};
  border-color: ${({brColor = 'darkgrey'}) => brColor};
  border-style: ${({brStyle = 'solid'}) => brStyle};
  border-radius: ${({brRadius = '5px'}) => brRadius};
  padding: ${({padding = '0px 0px 0px 0px'}) => padding};
  text-transform:  ${({transform = 'uppercase'}) => transform};
  cursor: ${({cursor = 'pointer'}) => cursor};
  &:hover {
    opacity: ${({opacity = 0.8}) => opacity};
    transition: 0.51s;
  }
  &:disabled {
    cursor: default;
    opacity: 0.5;
  }
`