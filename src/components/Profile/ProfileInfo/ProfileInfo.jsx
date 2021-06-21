import React from 'react';
import classes from './ProfileInfo.module.css';
import profileDefaultAvatar from '../../../assets/img/avaMock.jpg';
import Loader from '../../UI/Loader';


const ProfileInfo = (props) => {    
    if (!props.profile) {
        return <Loader />
    }

    return (
        <div className={classes.header}>
            <img src="https://nv.ua/img/forall/users/0/2/barbuda-115-re.jpg" alt="beach" />
            <div className={classes.bio}>
                <img src={props.profile.photos.large ? props.profile.photos.large : profileDefaultAvatar} alt="avatar" />
                <div className={classes.info}>
                    <h3 className={classes.name}>{props.profile.fullName}</h3>
                    <p className={classes.about}>{props.profile.aboutMe}</p>
                    <ul className={classes.contacts}>
                        <li className={classes.contact}>
                            <a href={props.profile.contacts.vk}>Вконтакте</a>
                        </li>
                        <li className={classes.contact}>
                            <a href={props.profile.contacts.twitter}>Twitter</a>
                        </li>
                        <li className={classes.contact}>
                            <a href={props.profile.contacts.instagram}>Instagram</a>
                        </li>
                        <li className={classes.contact}>
                            <a href={props.profile.contacts.github}>Github</a>
                        </li>
                    </ul>
                    <h4>  {props.profile.lookingForAJob ? "Ищу работу!" : "Не ищу работу!" } </h4> 
                    <p> {props.profile.lookingForAJobDescription} </p>                 
                </div>
            </div>           
        </div>
    )
}

export default ProfileInfo;









