import {createSlice} from '@reduxjs/toolkit';

let initialState = {
    dialogUsers: [
        { id: 1, name: 'Andrey' },
        { id: 2, name: 'Anna' },
        { id: 3, name: 'Zlata' },
        { id: 4, name: 'Yuri' }
    ],
    messages : [
        { id: 1, message: 'Good day to learn React!' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: 'Per Aspera ad Astra' },
        { id: 4, message: 'Just do it!!!' }
    ],
};

const dialogsReducer = createSlice({
    name: 'dialogs',
    initialState,
    reducers: {
        addMessageAC(state, action) {
            let messageId =  state.messages.length;
            let message = {
                id: ++messageId,
                message: action.payload.message,
            }
            state.messages = [...state.messages, message]
        },
    }
});

export const selectDialogUsers = state => state.dialogs.dialogUsers;

export const selectMessages = state => state.dialogs.messages;

export const { addMessageAC } = dialogsReducer.actions;

export default dialogsReducer.reducer;
