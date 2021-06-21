import React from 'react';
import classes from './Users.module.css';
import userDefaultAvatar from '../../assets/img/avatar.png';
import Loader from '../UI/Loader';
import Loader2 from '../UI/Loader2';


let Users = (props) => {

    let pagesCount = Math.ceil( props.totalUsersCount / props.pageSize );

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
                className={props.currentPage === p ? classes.selectedPage : ""}
                onClick={() => {props.onPageChange(p)}} >{p}</span>
            ))}
        </div>
        {
            props.isLoading 
            ? <Loader />
            : props.users.map(user => (
                    <div className={classes.user} key={user.id}>
                        <div className={classes.left}>
                            <img src={user.photos.small ? user.photos.small : userDefaultAvatar } alt="avatar" width="100" height="100" />
                            <button onClick={() => {props.follow(user.id)}}>
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

export default Users;








