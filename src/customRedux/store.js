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
            ]
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
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('render all tree')
    },
    addPost() {
        let postId =  this._state.profilePage.myPosts.length;
        let post = {
            id: ++postId,
            message: this._state.profilePage.postArea,
            like: 0
        }
        this._state.profilePage.myPosts.push(post);
        this._state.profilePage.postArea = '';
        this._callSubscriber(this._state);
    },
    updatePostArea(event) {
        this._state.profilePage.postArea = event.target.value;
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    }
}

export default store;