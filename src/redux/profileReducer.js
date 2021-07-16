import { profileAPI, usersAPI } from '../api/api';

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';


// ACTION CREATORS

export const addPostCreator = (newPost) => ({ type: ADD_POST, newPost });

const setStatus = (status) => ({ type: SET_STATUS, status });
const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
const savePhotoSuccess = (photos) => ({ type: SAVE_PHOTO_SUCCESS, photos });

// INITIAL STATE

let initialState = {
    posts: [
        { id: 1, message: "Hi, how are you?", likesCount: 12 },
        { id: 2, message: "It is my first post", likesCount: 13 },
        { id: 3, message: "Yo", likesCount: 58 },
    ],
    profile: null,
    status: "",
}

// REDUCER

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.newPost,
                likesCount: 0,
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: '',
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
        case SAVE_PHOTO_SUCCESS: {            
            return {
                ...state,
                profile: {...state.profile, photos: action.photos} 
            };
        }
        default:
            return state;
    }
}

// THUNKS
export const getProfileData = (userId) => {
    return async (dispatch) => {
        const data = await usersAPI.getProfileData(userId);
        dispatch(setUserProfile(data));
    }
}

export const getUserStatus = (userId) => {
    return async (dispatch) => {
        const data = await profileAPI.getUserStatus(userId);
        dispatch(setStatus(data));
    }
}

export const updateStatus = (status) => {
    return async (dispatch) => {
        const data = await profileAPI.updateStatus(status)

        if (data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    }
}

export const savePhoto = (file) => {
    return async (dispatch) => {
        const data = await profileAPI.savePhoto(file)

        if (data.resultCode === 0) {
            dispatch(savePhotoSuccess(data.data.photos));
        }
    }
}


export default profileReducer;