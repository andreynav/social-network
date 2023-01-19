import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { RootState } from './store'

export type DialogUsersT = {
	id: number
	name: string
}

export type MessagesT = {
	id: number
	message: string
}

const initialState = {
	dialogUsers: [
		{ id: 1, name: 'Andrey' },
		{ id: 2, name: 'Anna' },
		{ id: 3, name: 'Zlata' },
		{ id: 4, name: 'Yuri' }
	] as Array<DialogUsersT>,
	messages: [
		{ id: 1, message: 'Good day to learn React!' },
		{ id: 2, message: 'How are you?' },
		{ id: 3, message: 'Per Aspera ad Astra' },
		{ id: 4, message: 'Just do it!!!' }
	] as Array<MessagesT>
}

const dialogsReducer = createSlice({
	name: 'dialogs',
	initialState,
	reducers: {
		addMessageAC: {
			reducer: (state, action: PayloadAction<MessagesT>) => {
				state.messages = [...state.messages, action.payload]
			},
			prepare: (message) => {
				let messageId = initialState.messages.length

				return {
					payload: {
						id: ++messageId,
						message: message
					}
				}
			}
		}
	}
})

export const selectDialogUsers = (state: RootState) => state.dialogs.dialogUsers

export const selectMessages = (state: RootState) => state.dialogs.messages

export const { addMessageAC } = dialogsReducer.actions

export const dialogReducers = dialogsReducer.reducer
