import React from 'react';
import classes from './Users.module.css';
import userDefaultAvatar from '../../assets/img/avatar.png';
import Loader from '../UI/Loader';
import { NavLink } from 'react-router-dom';
import Paginator from '../UI/Paginator/Paginator';


let Users = ({currentPage, totalUsersCount, pageSize, onPageChange, users, ...props}) => {    
  
    return (
        <div>
            <h2 className={classes.title}>Users</h2>         
            <Paginator currentPage={currentPage}
             totalUsersCount={totalUsersCount}
             pageSize={pageSize}
             onPageChange={onPageChange} />
            {
                props.isLoading
                    ? <Loader />
                    : users.map(user => (
                        <div className={classes.user} key={user.id}>
                            <div className={classes.left}>
                                <NavLink to={"/profile/" + user.id}>
                                    <img src={user.photos.small ? user.photos.small : userDefaultAvatar} alt="avatar" width="100" height="100" />
                                </NavLink>
                                <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                                    if (user.followed) {
                                     props.unFollow(user.id)
                                    } else {
                                     props.follow(user.id) 
                                   }
                                }
                                }>
                                    {user.followed ? "UnFollow" : "Follow"}
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








