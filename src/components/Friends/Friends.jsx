import React from 'react';
import Friend from './Friend/Friend';
import classes from "./Friends.module.css";


const Friends = (props) => {
    return (
        <div className={classes.friends}>
            <h2 className={classes.title}>Friends</h2>
            <ul className={classes.list}>
                {props.friends.map((friend) => {
                    return <Friend key={Math.random + friend.id} name={friend.name}/>
                })}
            </ul>
        </div>
    )
}

export default Friends;


