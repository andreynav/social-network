const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_MESSAGE_AREA = 'UPDATE-MESSAGE-AREA'

const dialogPageReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let messageId =  state.messages.length;
            let message = {
                id: ++messageId,
                message: state.messageArea,
            }
            state.messages.push(message);
            state.messageArea = '';
            return state;
        case UPDATE_MESSAGE_AREA:
            state.messageArea = action.newText;
            return state;
        default:
            return state;
    }
}

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE })
export const updateMessageActionCreator = (text) => ({ type: UPDATE_MESSAGE_AREA, newText: text })

export default dialogPageReducer;