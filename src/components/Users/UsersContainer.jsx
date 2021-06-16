import React from 'react';
import { connect } from 'react-redux';
import { followAC, setUsersAC } from '../../redux/usersReducer';
import Users from './Users';

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleFollow: (userId) => {
            dispatch(followAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        }
    }
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;








