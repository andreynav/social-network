import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { RootState } from './store'

type DialogUsersT = {
	id: number
	name: string
}

type MessagesT = {
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

type InitialStateT = typeof initialState

const dialogsReducer = createSlice({
	name: 'dialogs',
	initialState,
	reducers: {
		addMessageAC(state: InitialStateT, action: PayloadAction<MessagesT>) {
			let messageId = state.messages.length
			const message = {
				id: ++messageId,
				message: action.payload.message
			}
			state.messages = [...state.messages, message]
		}
	}
})

export const selectDialogUsers = (state: RootState) => state.dialogs.dialogUsers

export const selectMessages = (state: RootState) => state.dialogs.messages

export const { addMessageAC } = dialogsReducer.actions

export default dialogsReducer.reducer
