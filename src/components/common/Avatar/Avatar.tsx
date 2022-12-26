import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

import { avatar } from '../../../assets'

export type AvatarPropsT = {
	src: string | undefined
	alt: string
	id: number
	isOwner: boolean
	isNavLink: boolean
}

export type StyledAvatarT = {
	height: string
	width: string
	brRadius: string
}

export const Avatar = (props: AvatarPropsT): JSX.Element => {
	const SimpleAvatar = (
		<img src={props.src || avatar} alt={props.alt || 'avatar'} />
	)

	const AvatarWithNavLink = (
		<NavLink to={`/profile/${props.id}`}>{SimpleAvatar}</NavLink>
	)
	return (
		<StyledAvatar>
			{props.isNavLink ? AvatarWithNavLink : SimpleAvatar}
		</StyledAvatar>
	)
}

const StyledAvatar = styled.div<Partial<StyledAvatarT>>`
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
