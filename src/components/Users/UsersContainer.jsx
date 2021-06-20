import { connect } from 'react-redux';
import { followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC } from '../../redux/usersReducer';
import Users from './Users';

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleFollow: (userId) => {
            dispatch(followAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (newCurrent) => {
            dispatch(setCurrentPageAC(newCurrent))
        },
        setTotalUsersCount: (total) => {
            dispatch(setTotalUsersCountAC(total))
        }
    }
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;








