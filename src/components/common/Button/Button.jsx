import React from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'

export const Button = (props) => {
	const { t } = useTranslation()

	const SimpleButton = <StyledButton {...props}>{props.children}</StyledButton>

	const UserDownloadPhotoButton = (
		<FileInput type="file" title=" " name="avatar" onChange={props.onChange} />
	)

	const FollowUnfollowButton = (
		<StyledButton
			id={props.id}
			followInProgress={props.followInProgress}
			followed={props.followed}
			onClick={() => props.toggleFollow(props.id)}
			disabled={props.followInProgress?.some((userId) => userId === props.id)}
			height="26px"
			minWidth="50%"
			width="70px"
			fontSize="9px"
		>
			{props.followed ? t('users.follow') : t('users.unfollow')}
		</StyledButton>
	)

	return (
		(props.isOwner && UserDownloadPhotoButton) ||
		(props.isFollowButton && FollowUnfollowButton) ||
		SimpleButton
	)
}

const StyledButton = styled.button`
	display: grid;
	grid-area: ${({ areaName }) => areaName};
	align-content: ${({ alignContent = 'center' }) => alignContent};
	min-width: ${({ minWidth = '100%' }) => minWidth};
	width: ${({ width = '25px' }) => width};
	height: ${({ height = '35px' }) => height};
	background-color: ${(props) => props.bgColor || props.theme.bgColorSecondary};
	color: ${(props) => props.theme.colorPrimary};
	font-size: ${({ fontSize = '12px' }) => fontSize};
	border-width: ${({ brWidth = '1px' }) => brWidth};
	border-color: ${(props) => props.theme.borderPrimary};
	border-style: ${({ brStyle = 'solid' }) => brStyle};
	border-radius: ${({ brRadius = '5px' }) => brRadius};
	padding: ${({ padding = '0px 0px 0px 0px' }) => padding};
	text-transform: ${({ transform = 'uppercase' }) => transform};
	cursor: ${({ cursor = 'pointer' }) => cursor};

	&:hover {
		opacity: ${({ opacity = 0.8 }) => opacity};
		color: ${(props) => props.theme.colorSecondary};
		border-color: ${(props) => props.theme.borderSecondary};
		transition: 0.51s;
	}

	&:disabled {
		cursor: default;
		opacity: 0.5;
	}
`

const FileInput = styled.input`
	display: grid;

	&::file-selector-button {
		display: grid;
		background-color: ${({ bgColor = 'transparent' }) => bgColor};
		border: 1px solid ${(props) => props.theme.borderPrimary};
		border-radius: 5px;
		color: ${(props) => props.theme.colorPrimary};
		font-size: 10px;
		outline: none;
		padding: 10px;
		text-transform: uppercase;
		transition: all 1s ease;
		cursor: ${({ cursor = 'pointer' }) => cursor};
		width: ${({ width = 100 }) => width}px;
	}

	&[type='file'] {
		color: transparent;
	}

	&::file-selector-button:hover {
		opacity: ${({ opacity = 0.8 }) => opacity};
		color: ${(props) => props.theme.colorSecondary};
		border-color: ${(props) => props.theme.borderSecondary};
		transition: 0.51s;
	}
`
