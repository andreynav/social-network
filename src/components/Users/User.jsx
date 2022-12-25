import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'

import { getUserSchemeData } from '../../utils/getUserSchemeData'
import { PhotoSection, UserInfoItem } from '../index'

export const User = memo((props) => {
	const {
		photos,
		id,
		name,
		status,
		followInProgress,
		toggleFollow,
		followed,
		city,
		isNavLink
	} = props
	const { t } = useTranslation()
	const userData = getUserSchemeData({ name, status, id, city }).map(
		(item) => ({ ...item, itemName: t(item['itemName']) })
	)
	const userItems = userData.map((item, index) => (
		<UserInfoItem
			key={index}
			itemData={item.itemData}
			itemName={item.itemName}
		/>
	))

	return (
		<UserWrapper>
			<PhotoSection
				photos={photos}
				name={name}
				id={id}
				followed={followed}
				toggleFollow={toggleFollow}
				followInProgress={followInProgress}
				isNavLink={isNavLink}
				isFollowButton={true}
			/>

			<UserData>{userItems}</UserData>
		</UserWrapper>
	)
})

const UserWrapper = styled.div`
	display: grid;
	grid-template-columns: 90px 1fr;
	margin: 20px 0 10px 0;
`

const UserData = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr 1fr;
	background-color: transparent;
	border: 1px solid ${(props) => props.theme.borderPrimary};
	border-radius: 8px;
	padding: 8px;
	font-weight: normal;
	align-items: center;
`
