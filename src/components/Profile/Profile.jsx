import React from 'react';
import MypostsContainer from './MyPosts/MypostContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  
    return (
      <>      
        <ProfileInfo profile={props.profile}/> 
        <MypostsContainer />       
      </>
    )
}

export default Profile;





