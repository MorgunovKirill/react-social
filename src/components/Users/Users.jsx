import React from 'react';
import classes from './Users.module.css';
import Loader from '../UI/Loader';
import Paginator from '../UI/Paginator/Paginator';
import { User } from './User/User';


let Users = ({currentPage, totalUsersCount, pageSize, onPageChange, users, followingInProgress, ...props}) => {    
  
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
                    : users.map(user => ( <User user={user} 
                                                key={user.id} 
                                                followingInProgress={followingInProgress}
                                                follow={props.follow}
                                                unFollow={props.unFollow}
                                                 />))
            }
        </div>
    )
}

export default Users;








