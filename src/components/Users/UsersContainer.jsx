import { connect } from 'react-redux';
import { follow, unFollow, requestUsers } from '../../redux/usersReducer';
import React from 'react';
import Users from './Users';
import { getCurrentPage, getFollowingInProgress, getIsLoading, getPageSize, getTotalUsersCount, getUsers } from '../../redux/users-selectors';


class UsersContainer extends React.Component {


    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize);     
    }


    onPageChange = (pageNumber) => {
        this.props.requestUsers(pageNumber, this.props.pageSize);  
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
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isLoading: getIsLoading(state),
        followingInProgress: getFollowingInProgress(state)
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
    requestUsers
}
)(UsersContainer)








