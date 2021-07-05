import React from 'react';
import classes from "./Header.module.css";
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <header className={classes.header}>
            <img src="https://fb.ru/misc/i/gallery/88575/2586156.jpg" alt="" />
            <div className={classes.login}>
                {
                    props.isAuth 
                    ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
                    : <NavLink to="/login">Login</NavLink>
                }                
            </div>
        </header>
    )
}

export default Header;