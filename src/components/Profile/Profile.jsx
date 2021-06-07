import React from 'react';
import Myposts from './MyPosts/Myposts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  
    return (
      <div>      
        <ProfileInfo />        
        <Myposts posts={props.profilePage.posts} addPost={props.addPost} newPostText={props.profilePage.newPostText} updateNewPostText={props.updateNewPostText}/>
      </div>
    )
}

export default Profile;





