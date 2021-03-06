import { connect } from 'react-redux';
import { followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC } from '../../redux/usersReducer';
import * as axios from 'axios';
import React from 'react';
import Users from './Users';


class UsersContainer extends React.Component {

    componentDidMount() {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
                 this.props.setUsers(response.data.items);
                 this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    // https://react-social-6dbbe-default-rtdb.europe-west1.firebasedatabase.app/users1.json

    onPageChange = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
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
        toggleFollow={this.props.toggleFollow}
        />
    }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)








