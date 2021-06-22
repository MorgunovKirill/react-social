import { connect } from 'react-redux';
import { follow, setCurrentPage, setTotalUsersCount, setUsers, toggleIsLoading } from '../../redux/usersReducer';
import * as axios from 'axios';
import React from 'react';
import Users from './Users';


class UsersContainer extends React.Component {

    componentDidMount() {
            this.props.toggleIsLoading(true);
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, { withCredentials: true }).then(response => {
                 this.props.toggleIsLoading(false);
                 this.props.setUsers(response.data.items);
                 this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    // https://react-social-6dbbe-default-rtdb.europe-west1.firebasedatabase.app/users1.json

    onPageChange = (pageNumber) => {       
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsLoading(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, { withCredentials: true }).then(response => {
                 this.props.toggleIsLoading(false);
                 this.props.setUsers(response.data.items)
            });
    }

    render () {
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








