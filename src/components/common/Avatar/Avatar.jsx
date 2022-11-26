import React from "react"
import {NavLink} from "react-router-dom"
import {avatar} from "../../../assets"
import styled from "styled-components"

export const Avatar = (props) => {

    const SimpleAvatar = (
        <img src={props.src || avatar} alt={props.alt || 'avatar'} />
    )

    const AvatarWithNavLink = (
        <NavLink to={`/profile/${props.id}`}>
            { SimpleAvatar }
        </NavLink>
    )
    return (
        <StyledAvatar>
            {
                props.isNavLink
                    ? AvatarWithNavLink
                    : SimpleAvatar
            }
        </StyledAvatar>
    )
}

const StyledAvatar = styled.div`
  display: grid;
  align-self: start;
  align-items: start;

  & img {
    border: 1px solid ${props => props.theme.borderSecondary};
    height: ${({height = '70'}) => height}px;
    width: ${({width = '70'}) => width}px;
    border-radius: ${({brRadius = '35'}) => brRadius}px;
  }
`