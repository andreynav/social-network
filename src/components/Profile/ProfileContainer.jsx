import { compose } from '@reduxjs/toolkit'
import React, { useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'

import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { withRouter } from '../../hoc/withRouter'
import {
	getProfileInfo,
	getProfileStatus,
	selectProfileInfo,
	selectProfileInfoLoadingError,
	selectProfileInfoLoadingStatus,
	selectProfileInfoUpdateError,
	selectProfileInfoUpdateStatus,
	selectProfileStatus,
	updateProfileInfo,
	updateProfilePhoto,
	updateProfileStatus
} from '../../store/profileReducer'
import { Profile } from '../index'

const ProfileContainer = (props) => {
	const { currentUserId, userId, getProfileInfo, getProfileStatus } = props
	const dispatch = useDispatch()

	useEffect(() => {
		let id = currentUserId || userId
		getProfileInfo(id)
		getProfileStatus(id)
	}, [currentUserId])

	const onSavePhoto = (e) => {
		dispatch(updateProfilePhoto(e.target.files[0]))
	}

	return (
		<Profile
			onSavePhoto={onSavePhoto}
			updateProfileInfo={updateProfileInfo}
			{...props}
		/>
	)
}

let mapStateToProps = (state) => ({
	profileInfo: selectProfileInfo(state),
	profileInfoLoadingStatus: selectProfileInfoLoadingStatus(state),
	profileInfoLoadingError: selectProfileInfoLoadingError(state),
	profileStatus: selectProfileStatus(state),
	profileInfoUpdateStatus: selectProfileInfoUpdateStatus(state),
	profileInfoUpdateError: selectProfileInfoUpdateError(state)
})

export default compose(
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
