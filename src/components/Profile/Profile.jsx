import React from 'react';
import Myposts from './MyPosts/Myposts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  
    return (
      <div>      
        <ProfileInfo />        
        <Myposts posts={props.profilePage.posts} dispatch={props.dispatch}/>
      </div>
    )
}

export default Profile;





