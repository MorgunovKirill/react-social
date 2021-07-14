import React from 'react';
import classes from './ProfileInfo.module.css';
import profileDefaultAvatar from '../../../assets/img/avaMock.jpg';
import Loader from '../../UI/Loader';
import ProfileStatusWithHooks from './ProfileStatus/ProfileStatusWithHooks'


const ProfileInfo = ({profile, status, updateStatus}) => {    
    if (!profile) {
        return <Loader />
    }

    return (
        <div className={classes.header}>
            {/* <img src="https://nv.ua/img/forall/users/0/2/barbuda-115-re.jpg" alt="beach" /> */}
            <div className={classes.bio}>
                <div>
                    <img src={profile.photos.large ? profile.photos.large : profileDefaultAvatar} alt="avatar" />
                    <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
                </div>                
                <div className={classes.info}>
                    <h3 className={classes.name}>{profile.fullName}</h3>
                    <p className={classes.about}>{profile.aboutMe}</p>
                    <ul className={classes.contacts}>
                        <li className={classes.contact}>
                            <a href={profile.contacts.vk ? profile.contacts.vk : "#"}  target="_blank" rel="noreferrer">Вконтакте</a>
                        </li>
                        <li className={classes.contact}>
                            <a href={profile.contacts.twitter ? profile.contacts.twitter : "#"}  target="_blank" rel="noreferrer">Twitter</a>
                        </li>
                        <li className={classes.contact}>
                            <a href={profile.contacts.instagram ? profile.contacts.instagram : "#"}  target="_blank" rel="noreferrer">Instagram</a>
                        </li>
                        <li className={classes.contact}>
                            <a href={profile.contacts.github ? profile.contacts.github : "#"} target="_blank" rel="noreferrer">Github</a>
                        </li>
                    </ul>
                    <h4>  {profile.lookingForAJob ? "Ищу работу!" : "Не ищу работу!" } </h4> 
                    <p> {profile.lookingForAJobDescription} </p>                 
                </div>
            </div>           
        </div>
    )
}

export default ProfileInfo;









