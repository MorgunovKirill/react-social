import React from 'react';
import classes from './User.module.css';
import { NavLink } from 'react-router-dom';
import userDefaultAvatar from '../../../assets/img/avatar.png';


export const User = ({user, followingInProgress, unFollow, follow}) => (
    <div className={classes.user} key={user.id}>
        <div className={classes.left}>
            <NavLink to={"/profile/" + user.id}>
                <img src={user.photos.small ? user.photos.small : userDefaultAvatar} alt="avatar" width="100" height="100" />
            </NavLink>
            <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                if (user.followed) {
                    unFollow(user.id)
                } else {
                    follow(user.id)
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
)
