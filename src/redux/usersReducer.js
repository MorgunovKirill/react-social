const TOGGLE_FOLLOW = "TOGGLE_FOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_LOADING = "TOGGLE_IS_LOADING";

export const follow = (userId) => ({ type: TOGGLE_FOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount });
export const toggleIsLoading = (isLoading) => ({ type: TOGGLE_IS_LOADING, isLoading });


let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isLoading: false,
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FOLLOW:
            return {
                ...state,
                users: state.users.map( user => {
                    if (user.id === action.userId) {
                        return {
                            ...user,
                            followed: !user.followed
                        }
                    }
                    return user;
                })
            }
        case SET_USERS: {
            return { ...state, users: [...action.users]}
        }
        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return { ...state, totalUsersCount: action.totalUsersCount}
        }
        case TOGGLE_IS_LOADING: {
            return { ...state, isLoading: action.isLoading}
        }
        default:
            return state;
    }
}

export default usersReducer;