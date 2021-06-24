import { usersAPI } from '../api/api';

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';


// ACTION CREATORS

export const addPostCreator = () => ({ type: ADD_POST });
const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile});
export const updateNewPostCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

// INITIAL STATE

let initialState = {
    posts: [
        { id: 1, message: "Hi, how are you?", likesCount: 12 },
        { id: 2, message: "It is my first post", likesCount: 13 },
        { id: 3, message: "Yo", likesCount: 58 },
    ],
    newPostText: '',
    profile: null,
}

// REDUCER

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0,
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: '',
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText,
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile,
            };
        }
        default:
            return state;
    }
}

// THUNKS
export const getProfileData = (userId) => {
    return (dispatch) => {
        usersAPI.getProfileData(userId).then(data => {
            dispatch(setUserProfile(data));
        });
    }
}


export default profileReducer;