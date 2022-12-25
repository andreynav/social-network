import React, { memo, useEffect, useState } from 'react'
import styled from 'styled-components'

import { Label } from '../../index'

export const ProfileInfoStatus = memo(
	({ itemData, itemName, currentUserId, userId, updateProfileStatus }) => {
		const [editMode, setEditMode] = useState(false)
		const [status, setStatus] = useState(itemData)
		const onEditMode = () => {
			if (currentUserId === userId) {
				setEditMode((prevEditMode) => !prevEditMode)
				if (editMode) updateProfileStatus(status)
			}
		}

		const updateStatusValue = (event) => {
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
							defaultValue={status}
							onBlur={onEditMode}
							onChange={updateStatusValue}
							autoFocus
						/>
					</ItemInput>
				) : (
					<ItemText onClick={onEditMode}>{itemData}</ItemText>
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
