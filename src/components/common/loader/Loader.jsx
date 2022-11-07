import React from "react";
import styled from "styled-components";

export const Loader = (props) => {
    return (
        <StyledLoader {...props}/>
    )
}

const StyledLoader = styled.div`
  display: grid;
  align-self: ${({alignSelf = 'center'}) => alignSelf};
  justify-self: ${({justifySelf = 'center'}) => justifySelf};
  width: 30px;
  padding: 8px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: #25b09b;
  --_m:
          conic-gradient(#0000 10%,#000),
          linear-gradient(#000, #000, #000) content-box;
  -webkit-mask: var(--_m);
  mask: var(--_m);
  -webkit-mask-composite: source-out;
  mask-composite: subtract;
  animation: s3 1s infinite linear;

  @keyframes s3 {to{transform: rotate(1turn)}}
`