import { connect } from 'react-redux';
import { follow, setCurrentPage, setTotalUsersCount, setUsers, toggleIsLoading } from '../../redux/usersReducer';
import React from 'react';
import Users from './Users';
import { usersAPI } from '../../api/api';


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsLoading(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toggleIsLoading(false);
            this.props.setUsers(data.items);
            this.props.setTotalUsersCount(data.totalCount);
        });
    }


    onPageChange = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsLoading(true);
        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.toggleIsLoading(false);
            this.props.setUsers(data.items)
        });
    }

    render() {
        return <Users
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPageChange={this.onPageChange}
            users={this.props.users}
            follow={this.props.follow}
            isLoading={this.props.isLoading}
        />
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isLoading: state.usersPage.isLoading
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
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsLoading
}
)(UsersContainer)








