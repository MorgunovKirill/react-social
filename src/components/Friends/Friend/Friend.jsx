import React from 'react';
import classes from "./Friend.module.css";

const Friend = (props) => {
    return (
        <li className={classes.friend}>
            <a href="#">
                {props.name}
            </a>            
        </li>
    )
}

export default Friend;


