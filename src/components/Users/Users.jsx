import React from 'react';
import classes from './Users.module.css';
import userDefaultAvatar from '../../assets/img/avatar.png';
import Loader from '../UI/Loader';
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';


let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

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
                        onClick={() => { props.onPageChange(p) }} >{p}</span>
                ))}
            </div>
            {
                props.isLoading
                    ? <Loader />
                    : props.users.map(user => (
                        <div className={classes.user} key={user.id}>
                            <div className={classes.left}>
                                <NavLink to={"/profile/" + user.id}>
                                    <img src={user.photos.small ? user.photos.small : userDefaultAvatar} alt="avatar" width="100" height="100" />
                                </NavLink>
                                <button onClick={() => {
                                    if (user.followed) {
                                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                                        { withCredentials: true,
                                          headers: {
                                              "API-KEY": "7156a42a-a0ca-4173-80e0-2276dbe8cf49"
                                          }
                                        }).then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.follow(user.id)
                                        }
                                    })
                                    } else {
                                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                                        {},
                                        { withCredentials: true,
                                          headers: {
                                                "API-KEY": "7156a42a-a0ca-4173-80e0-2276dbe8cf49"
                                          } }).then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.follow(user.id)
                                        }
                                    })
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








