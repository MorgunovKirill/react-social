import React from 'react';
import MypostsContainer from './MyPosts/MypostContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  
    return (
      <>      
        <ProfileInfo savePhoto={props.savePhoto} isOwner={props.isOwner} profile={props.profile} status={props.status} updateStatus={props.updateStatus}/> 
        <MypostsContainer />       
      </>
    )
}

export default Profile;





