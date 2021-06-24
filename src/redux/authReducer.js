import { usersAPI } from '../api/api';

const SET_USER_DATA = 'SET_USER_DATA';

// ACTION CREATORS

const setAuthUserData = (userId, email, login) => ({ type: SET_USER_DATA, data: {userId, email, login}  });

// INITIAL STATE

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

// REDUCER

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data,
                isAuth: true
            };
        }
        default:
            return state;
    }
}

// THUNKS

export const getAuthProfileData = () => {
    return (dispatch) => {
        usersAPI.me().then(data => {                 
            if (data.resultCode === 0) {
                let {id, email, login} = data.data;
                dispatch(setAuthUserData(id, email, login));
            }
        });
    }
}


export default authReducer;