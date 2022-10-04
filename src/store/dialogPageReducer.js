import { createSlice } from '@reduxjs/toolkit';

let initialState = {
    dialogUsers: [
        { id: 1, name: 'Andrey' },
        { id: 2, name: 'Anna' },
        { id: 3, name: 'Zlata' },
        { id: 4, name: 'Yuri' }
    ],
    messages : [
        { id: 1, message: 'Hi nigga!' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: 'Yo!' },
        { id: 4, message: 'Just do it!' }
    ],
    messageArea: ''
};

const dialogPageSlice = createSlice({
    name: 'dialogPage',
    initialState,
    reducers: {
        addMessageAC(state) {
            let messageId =  state.messages.length;
            let message = {
                id: ++messageId,
                message: state.messageArea,
            }
            state.messages.push(message);
            state.messageArea = '';
        },
        updateMessageAreaAC(state, action) {
            state.messageArea = action.payload;
        }
    }
});

export const { addMessageAC, updateMessageAreaAC } = dialogPageSlice.actions;
export default dialogPageSlice.reducer;
