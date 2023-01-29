import { PhotosT } from 'api/api'
import { Avatar, Button } from 'components/index'
import { ChangeEvent } from 'react'
import styled from 'styled-components'

type PhotoSectionPropsT = {
	photos: Partial<PhotosT>
	id?: number
	name: string
	alt?: string
	isOwner?: boolean
	isNavLink?: boolean
	isFollowButton?: boolean
	height?: string
	width?: string
	brRadius?: string
	followInProgress?: Array<number>
	followed?: boolean
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void
	toggleFollow?: (id: number) => void
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
		// @ts-expect-error: React.HTMLAttributes<T>.id type is 'string' and couldn't be overridden as 'number
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

const StyledUserSection = styled.div<StyledUserSectionT>`
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
