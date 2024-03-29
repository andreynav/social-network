import { avatar } from 'assets'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export type AvatarPropsT = {
  src: null | string
  alt: string
  id?: number
  isOwner: boolean
  isNavLink: boolean
} & StyledAvatarT

export type StyledAvatarT = {
  height: string
  width: string
  brRadius: string
}

export const Avatar = (props: Partial<AvatarPropsT>) => {
  const SimpleAvatar = (
    <img src={props.src || avatar} alt={props.alt || 'avatar'} />
  )

  const AvatarWithNavLink = (
    <NavLink to={`/profile/${props.id}`}>{SimpleAvatar}</NavLink>
  )
  return (
    // @ts-expect-error:
    <StyledAvatar {...props}>
      {props.isNavLink ? AvatarWithNavLink : SimpleAvatar}
    </StyledAvatar>
  )
}

const StyledAvatar = styled.div<Partial<AvatarPropsT>>`
  display: grid;
  align-self: start;
  align-items: start;

  & img {
    border: 1px solid ${(props) => props.theme.borderSecondary};
    height: ${({ height = '70' }) => height}px;
    width: ${({ width = '70' }) => width}px;
    border-radius: ${({ brRadius = '35' }) => brRadius}px;
  }
`
