import { createAction, createReducer } from '@reduxjs/toolkit';

export const addMessage = createAction('ADD-MESSAGE');
export const updateMessageArea = createAction('UPDATE-MESSAGE-AREA', function prepare(text) {
    return {
        payload: {
            newText: text
        }
    }
});

let initialState = {
    dialogUsers : [
        { id: 1, name: 'Andrey' },
        { id: 2, name: 'Anna' },
        { id: 3, name: 'Zlata' },
        { id: 4, name: 'Yura' }
    ],
    messages : [
        { id: 1, message: 'Hi nigga!' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: 'Yo!' },
        { id: 4, message: 'Just do it!' }
    ],
    messageArea: ''
};

const dialogPageReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(addMessage, (state) => {
            let messageId =  state.messages.length;
            let message = {
                id: ++messageId,
                message: state.messageArea,
            }
            state.messages.push(message);
            state.messageArea = '';
        })
        .addCase(updateMessageArea, (state, action) => {
            state.messageArea = action.payload.newText;
        })
});

export default dialogPageReducer;