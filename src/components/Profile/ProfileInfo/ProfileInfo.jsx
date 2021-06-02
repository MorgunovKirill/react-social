import React from 'react';
import classes from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div className={classes.header}>
            <img src="https://nv.ua/img/forall/users/0/2/barbuda-115-re.jpg" alt="beach" />
            <div className={classes.ava}>
                <img src="https://static8.depositphotos.com/1207999/1027/i/600/depositphotos_10275222-stock-photo-office-avatar-man.jpg" alt="" />
                <p>Dmitry K.</p>
            </div>
        </div>
    )
}

export default ProfileInfo;









