const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

export const addPostCreator = () => ({ type: ADD_POST });

export const updateNewPostCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
})

let initialState = {
    posts: [
        { id: 1, message: "Hi, how are you?", likesCount: 12 },
        { id: 2, message: "It is my first post", likesCount: 13 },
        { id: 3, message: "Yo", likesCount: 58 },
    ],
    newPostText: '',
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0,
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;

        default:
            return state;
    }
}

export default profileReducer;