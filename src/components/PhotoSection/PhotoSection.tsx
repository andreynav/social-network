import React, { ChangeEvent } from 'react'
import styled from 'styled-components'

import { PhotosT } from '../../store/profileReducer'
import { Avatar } from '../common/Avatar/Avatar'
import { Button } from '../common/Button/Button'

type PhotoSectionPropsT = {
	photos: Partial<PhotosT>
	alt?: string
	name: string
	id?: number
	isOwner: boolean
	isNavLink?: boolean
	isFollowButton?: boolean
	height: string
	width: string
	brRadius: string
	followInProgress?: Array<number>
	followed?: boolean
	onChange: (e: ChangeEvent<HTMLInputElement>) => void
	toggleFollow?: () => void
	onClick?: () => void
}

type StyledUserSectionT = {
	height: string
	width: string
	brRadius: string
}

export const PhotoSection = (props: PhotoSectionPropsT) => {
	const { photos, name, id, isOwner, isNavLink, isFollowButton } = props

	return (
		// @ts-expect-error: will be implemented further
		<StyledUserSection {...props}>
			<Avatar
				src={photos?.small}
				alt={name}
				id={id}
				isOwner={isOwner}
				isNavLink={isNavLink}
			/>
			{(isOwner || isFollowButton) && <Button {...props} />}
		</StyledUserSection>
	)
}

const StyledUserSection = styled.div<
	StyledUserSectionT & React.ButtonHTMLAttributes<HTMLButtonElement>
>`
	display: grid;
	grid-gap: 10px;
	align-self: start;
	justify-self: start;

	& img {
		border: 1px solid ${(props) => props.theme.borderSecondary};
		height: ${({ height = '70' }) => height}px;
		width: ${({ width = '70' }) => width}px;
		border-radius: ${({ brRadius = '35' }) => brRadius}px;
	}
`
