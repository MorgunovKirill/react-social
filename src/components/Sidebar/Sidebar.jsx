import React from 'react';
import classes from "./Sidebar.module.css";
import Nav from '../Nav/Nav';

const Sidebar = () => {
    return (
        <div className={classes.sidebar}>
            <Nav />
        </div>
    )
}

export default Sidebar;


