import React from 'react';
import classes from "./Sidebar.module.css";
import Nav from '../Nav/Nav';
import FriendsContainer from '../Friends/FriendsContainer';

const Sidebar = () => {    
    return (
        <div className={classes.sidebar}>
            <Nav />
            <FriendsContainer />
        </div>
    )
}

export default Sidebar;


