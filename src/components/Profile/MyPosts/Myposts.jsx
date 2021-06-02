import React from 'react';
import classes from "./Myposts.module.css";
import Post from './Post/Post'

const Myposts = () => {
  const postData = [
      {id: 1, message: 'Hi, how are you?', likesCount: 12},
      {id: 2, message: 'It is my first post', likesCount: 13},
      {id: 3, message: 'Yo', likesCount: 58},
  ];


  return (  
    <div className={classes.my_posts}>
      <h2>My posts</h2> 
      <textarea name="mypost" placeholder="your news"></textarea>   
      <button type="button">Send</button>
      <Post message={postData[0].message} likesCount={postData[0].likesCount} />
      <Post message={postData[1].message} likesCount={postData[1].likesCount} />
      <Post message={postData[2].message} likesCount={postData[2].likesCount} />
      </div>          
)
}



export default Myposts;





