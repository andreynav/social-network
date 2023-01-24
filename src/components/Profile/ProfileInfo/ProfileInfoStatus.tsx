import { ChangeEvent, memo, useEffect, useState } from 'react'
import styled from 'styled-components'

import { Label } from '../../index'
import { ProfileT } from '../Profile'

export type ProfileInfoStatusT = {
	itemData: string | boolean
	itemName: string | null
	isPointer: boolean
} & Partial<ProfileT>

export const ProfileInfoStatus = memo(
	({
		itemData,
		itemName,
		currentUserId,
		userId,
		updateProfileStatus
	}: ProfileInfoStatusT) => {
		const [editMode, setEditMode] = useState(false)
		const [status, setStatus] = useState(itemData)
		const onEditMode = () => {
			if (currentUserId === userId) {
				setEditMode((prevEditMode) => !prevEditMode)
				if (editMode) updateProfileStatus!(status)
			}
		}

		const updateStatusValue = (event: ChangeEvent<HTMLInputElement>): void => {
			setStatus(event.target.value)
		}

		useEffect(() => {
			setStatus(itemData)
		}, [itemData])

		return (
			<ItemWrapper>
				<Label fontSize="10px">{itemName}</Label>
				{editMode ? (
					<ItemInput>
						<input
							type="text"
							// @ts-ignore
							defaultValue={status}
							onBlur={onEditMode}
							onChange={updateStatusValue}
						/>
					</ItemInput>
				) : (
					<ItemText
						onClick={onEditMode}
						onKeyDown={onEditMode}
						role="presentation"
					>
						{itemData}
					</ItemText>
				)}
			</ItemWrapper>
		)
	}
)

const ItemWrapper = styled.div`
	display: grid;
	grid-template-rows: 12px auto;
	align-items: center;
`

const ItemInput = styled.div`
	cursor: pointer;
	& > input {
		min-width: 100%;
		background-color: transparent;
		color: ${(props) => props.theme.colorPrimary};
	}
`

const ItemText = styled.div`
	cursor: pointer;
`
