import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { RootState } from './store'

export type DialogUserT = {
  id: number
  name: string
}

export type DialogMessageT = {
  id: number
  message: string
}

type InitialStateT = {
  dialogUsers: Array<DialogUserT>
  messages: Array<DialogMessageT>
}

const initialState: InitialStateT = {
  dialogUsers: [
    { id: 1, name: 'Andrey' },
    { id: 2, name: 'Anna' },
    { id: 3, name: 'Zlata' },
    { id: 4, name: 'Yuri' }
  ],
  messages: [
    { id: 1, message: 'Good day to learn React!' },
    { id: 2, message: 'How are you?' },
    { id: 3, message: 'Per Aspera ad Astra' },
    { id: 4, message: 'Just do it!!!' }
  ]
}

const dialogsSlice = createSlice({
  name: 'dialogs',
  initialState,
  reducers: {
    addMessageAC: {
      reducer: (state, action: PayloadAction<DialogMessageT>) => {
        state.messages = [...state.messages, action.payload]
      },
      prepare: (message: string) => {
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

export const { reducer: dialogReducers, actions: dialogActions } = dialogsSlice
