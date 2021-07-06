import { getAuthProfileData } from './authReducer';

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

// ACTION CREATORS

const initializedSuccess = () => ({ type: INITIALIZED_SUCCESS });

// INITIAL STATE

let initialState = {
    initialized: false,
}

// REDUCER

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS: {
            return {
                ...state,
                initialized: true,
            };
        }
        default:
            return state;
    }
}

// THUNKS

export const initializeApp = () => {
    return (dispatch) => {
        let promise = dispatch(getAuthProfileData());
        Promise.all([promise]).then(() => {
            dispatch(initializedSuccess());
        });
    }
}


export default appReducer;