let store = {
    _state: {
        dialogPage: {
            dialogUsers : [
                { id: 1, name: 'Andrey' },
                { id: 2, name: 'Anna' },
                { id: 3, name: 'Zlata' },
                { id: 4, name: 'Ura' }
            ],
            messages : [
                { id: 1, message: 'Hi nigga!' },
                { id: 2, message: 'How are you?' },
                { id: 3, message: 'Yo!' },
                { id: 4, message: 'Just do it!' }
            ],
            messageArea: ''
        },
        profilePage: {
            myPosts : [
                {id: 1, message: "Hey, how are you?",  like: 105 },
                {id: 2, message: "You shell not pass, fellow!",  like: 304 },
                {id: 3, message: "It\'s my life",  like: 118 },
                {id: 4, message: "Nice day, let's learn React",  like: 257 },
                {id: 5, message: "Nice day, let's learn React2",  like: 357 },
                {id: 6, message: "Nice day, let's learn React3",  like: 457 },
                {id: 7, message: "Nice day, let's learn React4",  like: 557 },
                {id: 8, message: "Nice day, let's learn React5",  like: 657 }
            ],
            postArea: ''
        }
    },
    _callSubscriber() {
        console.log('render all tree')
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            let postId =  this._state.profilePage.myPosts.length;
            let post = {
                id: ++postId,
                message: this._state.profilePage.postArea,
                like: 0
            }
            this._state.profilePage.myPosts.push(post);
            this._state.profilePage.postArea = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_POST_AREA) {
            this._state.profilePage.postArea = action.newText
            this._callSubscriber(this._state);
        } else if (action.type === ADD_MESSAGE) {
            let messageId =  this._state.dialogPage.messages.length;
            let message = {
                id: ++messageId,
                message: this._state.dialogPage.messageArea,
            }
            this._state.dialogPage.messages.push(message);
            this._state.dialogPage.messageArea = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_MESSAGE_AREA) {
            this._state.dialogPage.messageArea = action.newText
            this._callSubscriber(this._state);
        }
    }
}

window.store = store;

const ADD_POST = 'ADD-POST';
const UPDATE_POST_AREA = 'UPDATE-POST-AREA';
const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_MESSAGE_AREA = 'UPDATE-MESSAGE-AREA'
export const addPostActionCreator = () => ({ type: ADD_POST})
export const updatePostAreaActionCreator = (text) => ({ type: UPDATE_POST_AREA, newText: text })
export const addMessageActionCreator = () => ({ type: ADD_MESSAGE })
export const updateMessageActionCreator = (text) => ({ type: UPDATE_MESSAGE_AREA, newText: text })

export default store;