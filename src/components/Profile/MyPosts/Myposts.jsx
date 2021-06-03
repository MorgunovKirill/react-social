import React from 'react';
import classes from "./Myposts.module.css";
import Post from './Post/Post'

const Myposts = (props) => { 

  const postElements = props.posts.map( (post, i) => <Post key={Math.random() + i} message={post.message} likesCount={post.likesCount} />);

  return (  
    <div className={classes.my_posts}>
      <h2>My posts</h2> 
      <textarea name="mypost" placeholder="your news"></textarea>   
      <button type="button">Send</button>
      {postElements}
      </div>          
)
}



export default Myposts;





