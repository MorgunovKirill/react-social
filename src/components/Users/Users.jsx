import * as axios from 'axios';
import React from 'react';
import classes from './Users.module.css';
import userDefaultAvatar from '../../assets/img/avatar.png';


class Users extends React.Component {

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

        let pagesCount = Math.ceil( this.props.totalUsersCount / this.props.pageSize );


        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }


        return (
            <div>
            <h2 className={classes.title}>Users</h2>
            <div className={classes.pagination}>
                {pages.map(p => (
                    <span
                    key={Math.random + p}
                    className={this.props.currentPage === p ? classes.selectedPage : ""}
                    onClick={() => {this.onPageChange(p)}} >{p}</span>
                ))}
            </div>
            {
                this.props.users.map(user => (
                        <div className={classes.user} key={user.id}>
                            <div className={classes.left}>
                                <img src={user.photos.small ? user.photos.small : userDefaultAvatar } alt="avatar" width="100" height="100" />
                                <button onClick={() => {this.props.toggleFollow(user.id)}}>
                                    {user.followed ? "Follow" : "UnFollow" }
                                </button>
                            </div>
                            <div className={classes.right}>
                                <div className={classes.status}>
                                    <span className={classes.name}>{user.name}</span>
                                    <span className={classes.status__text}>{user.status}</span>
                                </div>
                                <div className={classes.location}>
                                    <span className={classes.country}>{'user.location.country'}</span>
                                    <span className={classes.city}>{'user.location.city'}</span>
                                </div>
                            </div>
                        </div>
                    ))
            }
        </div>
        )
    }
}


export default Users;








