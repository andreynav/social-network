import React from "react";
import styled from "styled-components";

export const Label = (props) => {
    const {name, fontSize, transform, error} = props

    return (
        <LabelStyled htmlFor={name}
                    fontSize={fontSize}
                    transform={transform}
                    error={error} >
            <span>
                {props.children}
            </span>
        </LabelStyled>
    )
}

const LabelStyled = styled.div`
  font-size: ${({fontSize = '12px'}) => fontSize};
  text-transform: ${({transform = 'uppercase'}) => transform};
  color: ${({error}) => error ? '#E3242B' : '#7e7e7e'};
`