import React from 'react';
import classes from "./Myposts.module.css";
import MyPostsReduxForm from './MyPostsForm';
import Post from './Post/Post';


const Myposts = (props) => { 
  const postElements = props.posts.map( (post, i) => <Post key={Math.random() + i} message={post.message} likesCount={post.likesCount} />);
  const addPost = (formData) => {
      props.addPost(formData.mypost);
  }

    return (  
        <div className={classes.my_posts}>
          <h2>My posts</h2>            
          <MyPostsReduxForm onSubmit={addPost} />
          {/* <textarea onChange={props.updateTextArea} name="mypost" placeholder="your news" value={props.newPostText}/> 
          <button onClick={props.addPost}>Send</button> */}
          {postElements}
        </div>          
    )
}



export default Myposts;





