const ADD_POST = 'ADD-POST';
const UPDATE_POST_AREA = 'UPDATE-POST-AREA';

const profilePageReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let postId = state.myPosts.length;
            let post = {
                id: ++postId,
                message: state.postArea,
                like: 0
            }
            state.myPosts.push(post);
            state.postArea = '';
            return state;
        case UPDATE_POST_AREA:
            state.postArea = action.newText;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST})
export const updatePostAreaActionCreator = (text) => ({ type: UPDATE_POST_AREA, newText: text })

export default profilePageReducer;