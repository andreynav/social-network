// import { getProfileSchemeData } from '@utils'
// import { getProfileInfoSchemeData } from '@utils'
import { ContactsT, ProfileInfoAPI } from 'api/api'
import {
	Button,
	FormProfileInfo,
	PhotoSection,
	ProfileInfoStatus,
	UserInfoItem
} from 'components/index'
import { memo, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { getProfileInfoSchemeData } from 'utils/getProfileInfoSchemeData'
import { getProfileSchemeData } from 'utils/getProfileSchemeData'

import { ProfileT } from '../Profile'

export const ProfileInfo = memo((props: ProfileT) => {
	const {
		profileInfo,
		profileStatus,
		updateProfileStatus,
		currentUserId,
		userId,
		onSavePhoto,
		profileInfoUpdateError,
		updateProfileInfo
	} = props

	const isOwner = currentUserId === userId
	const [editMode, setEditMode] = useState(false)
	const { t } = useTranslation()

	const {
		register,
		handleSubmit,
		formState: { errors },
		setError,
		clearErrors
	} = useForm()

	useEffect(() => {
		profileInfoUpdateError &&
			setError('server', { message: profileInfoUpdateError })
	}, [profileInfoUpdateError, setError])

	const profileData = getProfileSchemeData(profileInfo!).map((item) => ({
		...item,
		itemName: t(item['itemName'])
	}))

	const profileInfoItems = profileData.map((item, index) => (
		<UserInfoItem
			key={index}
			itemData={item.itemData!}
			itemName={item.itemName}
			itemType={item.itemType}
		/>
	))

	const showEditButtonIfOwner = () => {
		if (!isOwner) return
		return (
			<Button fontSize="12px" height="30px" onClick={onEditMode}>
				{t('profile.editProfileBtn')}
			</Button>
		)
	}

	const onEditMode = () => {
		setEditMode((prevEditMode) => !prevEditMode)
	}

	const onFormSubmit = (data: ProfileInfoAPI & ContactsT) => {
		const updatedInfo = getProfileInfoSchemeData(data)
		// updateProfileInfo is already wrapped to dispatch in mapDispatchToProps
		// @ts-ignore
		updateProfileInfo(updatedInfo).then((response) => {
			// refactor then
			if (response.messages) return
			setEditMode((prevEditMode) => !prevEditMode)
		})
	}

	const onClearErrors = () => {
		errors && clearErrors()
	}

	return (
		<ProfileInfoWrapper>
			<PhotoBackground></PhotoBackground>
			<UserDataWrapper>
				<PhotoSection
					isOwner={isOwner}
					height={'100'}
					width={'100'}
					brRadius={'50'}
					photos={profileInfo!.photos}
					name={profileInfo!.fullName}
					onChange={onSavePhoto}
				/>
				<UserInfo>
					<ProfileInfoStatus
						itemData={profileStatus || ' - '}
						itemName={t('profile.status')}
						isPointer
						updateProfileStatus={updateProfileStatus}
						currentUserId={currentUserId}
						userId={userId}
					/>
					{editMode ? (
						<FormProfileInfo
							// @ts-ignore
							onSubmit={handleSubmit(onFormSubmit)}
							register={register}
							registerCheckbox={register('lookingForAJob')}
							errors={errors}
							onClearErrors={onClearErrors}
							profileData={profileData}
						/>
					) : (
						<div>
							{profileInfoItems}
							{showEditButtonIfOwner()}
						</div>
					)}
				</UserInfo>
			</UserDataWrapper>
		</ProfileInfoWrapper>
	)
})

const ProfileInfoWrapper = styled.div`
	display: grid;
	grid-template-rows: 120px auto;
`

const PhotoBackground = styled.div<{ bgColor?: string }>`
	background-color: ${(props) =>
		props.bgColor || props.theme.borderSecondary};
	border-radius: 8px 8px 0 0;
`

const UserDataWrapper = styled.div`
	display: grid;
	margin: 20px 0 10px 0;
	grid-template-columns: 120px 1fr;
`
const UserInfo = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	background-color: transparent;
	border: 1px solid ${(props) => props.theme.borderPrimary};
	border-radius: 8px;
	padding: 10px;
	grid-row-gap: 8px;
`
