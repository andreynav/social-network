import React from "react"
import styled from "styled-components"
import {Button} from "../common/Button/Button"
import {Avatar} from "../common/Avatar/Avatar"

export const PhotoSection = (props) => {
    const {photos, name, id, isOwner, isNavLink, isFollowButton} = props

    return (
        <StyledUserSection {...props}>
            <Avatar src={photos?.small} alt={name} id={id} isOwner={isOwner} isNavLink={isNavLink}/>
            { (isOwner || isFollowButton) && <Button {...props} /> }
        </StyledUserSection>
    )
}

const StyledUserSection = styled.div`
  display: grid;
  grid-gap: 10px;
  align-self: start;
  justify-self: start;

  & img {
    border: 1px solid ${props => props.theme.borderSecondary};
    height: ${({height = '70'}) => height}px;
    width: ${({width = '70'}) => width}px;
    border-radius: ${({brRadius = '35'}) => brRadius}px;
  }
`
