import React from "react"
import styled from "styled-components"
import {useParams} from "react-router-dom"
import {Button} from "../common/Button/Button"
import {Avatar} from "../common/Avatar/Avatar"

export const PhotoSection = (props) => {
    const {photos, name, id, isOwner, isNavLink} = props
    const params = useParams()
    const isNotUserProfilePage = !params.id

    return (
        <StyledUserSection {...props}>
            <Avatar src={photos?.small} alt={name} id={id} isOwner={isOwner} isNavLink={isNavLink}/>
            {
                isOwner
                    ? <Button isOwner {...props} />
                    : isNotUserProfilePage && <Button isNotUserProfilePage {...props} />
            }
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
