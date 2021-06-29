import { profileAPI, usersAPI } from '../api/api';

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';


// ACTION CREATORS

export const addPostCreator = () => ({ type: ADD_POST });
export const updateNewPostCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

const setStatus = (status) => ({ type: SET_STATUS, status });
const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile});

// INITIAL STATE

let initialState = {
    posts: [
        { id: 1, message: "Hi, how are you?", likesCount: 12 },
        { id: 2, message: "It is my first post", likesCount: 13 },
        { id: 3, message: "Yo", likesCount: 58 },
    ],
    newPostText: '',
    profile: null,
    status: "",
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
        case SET_STATUS: {
            return {
                ...state,
                status: action.status,
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

export const getUserStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getUserStatus(userId).then(data => {            
            dispatch(setStatus(data));
        });
    }
}

export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then(data => {    
            if (data.resultCode === 0) {
                dispatch(setStatus(status));
            }                    
        });
    }
}


export default profileReducer;