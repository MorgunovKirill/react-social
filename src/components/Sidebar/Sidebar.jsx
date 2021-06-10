import React from 'react';
import classes from "./Sidebar.module.css";
import Nav from '../Nav/Nav';
import Friends from '../Friends/Friends';

const Sidebar = (props) => {
    let state = props.store.getState().sideBar;  
    
    return (
        <div className={classes.sidebar}>
            <Nav />
            <Friends friends={state.friends} />
        </div>
    )
}

export default Sidebar;


