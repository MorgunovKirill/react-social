import React from 'react';
import classes from "./Myposts.module.css";
import Post from './Post/Post';
import {addPostCreator, updateNewPostCreator} from '../../../redux/profileReducer'

const Myposts = (props) => { 
  let addPost = () => {
    props.dispatch(addPostCreator());
  }

  let updateTextArea = (evt) => {
    let text = evt.target.value;
    props.dispatch(updateNewPostCreator(text));
  }

  const postElements = props.posts.map( (post, i) => <Post key={Math.random() + i} message={post.message} likesCount={post.likesCount} />);
  

    return (  
        <div className={classes.my_posts}>
          <h2>My posts</h2>            
          <textarea onChange={updateTextArea} name="mypost" placeholder="your news" value={props.newPostText}/> 
          <button onClick={addPost} type="button">Send</button>
          {postElements}
        </div>          
    )
}



export default Myposts;





