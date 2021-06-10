import React from 'react';
import MypostsContainer from './MyPosts/MypostContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  
    return (
      <div>      
        <ProfileInfo /> 
        <MypostsContainer store={props.store} />       
      </div>
    )
}

export default Profile;





