import { ProfileT } from 'components/Profile/Profile'
import { Label } from 'components/index'
import { ChangeEvent, memo, useEffect, useState } from 'react'
import styled from 'styled-components'
import { ItemData } from 'types/components'

export type ProfileInfoStatusT = {
	itemData: ItemData
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
				if (!editMode) return
				updateProfileStatus!(status as string)
			}
		}

		const updateStatusValue = (
			event: ChangeEvent<HTMLInputElement>
		): void => {
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
							defaultValue={status as string}
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
