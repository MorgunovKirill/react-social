import { connect } from 'react-redux';
import { follow, unFollow, setCurrentPage, getUsers } from '../../redux/usersReducer';
import React from 'react';
import Users from './Users';


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);     
    }


    onPageChange = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);  
        this.props.setCurrentPage(pageNumber);    
    }

    render() {
        return <Users
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPageChange={this.onPageChange}
            users={this.props.users}
            follow={this.props.follow}
            unFollow={this.props.unFollow}
            isLoading={this.props.isLoading}
            followingInProgress={this.props.followingInProgress}           
        />
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isLoading: state.usersPage.isLoading,
        followingInProgress: state.usersPage.followingInProgress
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         toggleFollow: (userId) => {
//             dispatch(followAC(userId))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (newCurrent) => {
//             dispatch(setCurrentPageAC(newCurrent))
//         },
//         setTotalUsersCount: (total) => {
//             dispatch(setTotalUsersCountAC(total))
//         },
//         toggleIsLoading: (isLoading) => {
//             dispatch(toggleIsLoadingAC(isLoading))
//         }
//     }
// }

export default connect(mapStateToProps, {
    follow,    
    unFollow,
    setCurrentPage,    
    getUsers
}
)(UsersContainer)








