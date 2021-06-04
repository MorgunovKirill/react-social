import React from 'react';
import classes from "./Myposts.module.css";
import Post from './Post/Post'

const Myposts = (props) => { 
  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
  }

  const postElements = props.posts.map( (post, i) => <Post key={Math.random() + i} message={post.message} likesCount={post.likesCount} />);
  

  return (  
    <div className={classes.my_posts}>
      <h2>My posts</h2> 
      <textarea ref={newPostElement} name="mypost" placeholder="your news"></textarea>   
      <button onClick={addPost} type="button">Send</button>
      {postElements}
      </div>          
)
}



export default Myposts;





