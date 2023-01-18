import { compose } from '@reduxjs/toolkit'
import React, { ChangeEvent, FunctionComponent, useEffect } from 'react'
import { connect } from 'react-redux'

import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { withRouter } from '../../hoc/withRouter'
import { useAppDispatch } from '../../hook/hooks'
import {
	ProfileInfoT,
	getProfileInfo,
	getProfileStatus,
	selectProfileInfo,
	selectProfileInfoError,
	selectProfileInfoStatus,
	selectProfileInfoUpdateError,
	selectProfileInfoUpdateStatus,
	selectProfileStatus,
	updateProfileInfo,
	updateProfilePhoto,
	updateProfileStatus
} from '../../store/profileReducer'
import { RootState } from '../../store/store'
import { Profile } from '../index'

export type ProfileContainerT = {
	currentUserId: number
	userId: number
	getProfileInfo: (userId: number) => void
	getProfileStatus: (userId: number) => void
	profileInfo: ProfileInfoT
	profileStatus: string
	updateProfileStatus: (status: string | boolean) => void
	profileInfoUpdateError: string
}

const ProfileContainer = (props: ProfileContainerT): JSX.Element => {
	const { currentUserId, userId, getProfileInfo, getProfileStatus } = props
	const dispatch = useAppDispatch()

	useEffect(() => {
		const id = currentUserId || userId
		getProfileInfo(id)
		getProfileStatus(id)
	}, [currentUserId, userId, getProfileInfo, getProfileStatus])

	const onSavePhoto = (e: ChangeEvent<HTMLInputElement>): void => {
		dispatch(updateProfilePhoto(e.target.files![0]))
	}

	return (
		<Profile
			onSavePhoto={onSavePhoto}
			updateProfileInfo={updateProfileInfo}
			{...props}
		/>
	)
}

const mapStateToProps = (state: RootState) => ({
	profileInfo: selectProfileInfo(state),
	profileInfoStatus: selectProfileInfoStatus(state),
	profileInfoError: selectProfileInfoError(state),
	profileStatus: selectProfileStatus(state),
	profileInfoUpdateStatus: selectProfileInfoUpdateStatus(state),
	profileInfoUpdateError: selectProfileInfoUpdateError(state)
})

const ProfileContainerWithProps = compose(
	connect(mapStateToProps, {
		getProfileInfo,
		getProfileStatus,
		updateProfileStatus,
		updateProfilePhoto,
		updateProfileInfo
	}),
	withAuthRedirect,
	withRouter
)(ProfileContainer)

export default ProfileContainerWithProps as FunctionComponent
