import React from 'react';
import Myposts from './Myposts';
import {addPostCreator, updateNewPostCreator} from '../../../redux/profileReducer';


const MypostsContainer = (props) => {     
  let state = props.store.getState().profilePage;

  let addPost = () => {
    props.store.dispatch(addPostCreator());
  }

  let updateTextArea = (evt) => {
    let text = evt.target.value;
    props.store.dispatch(updateNewPostCreator(text));
  }


    return (  
        <Myposts 
        updateTextArea={updateTextArea} 
        addPost={addPost} 
        posts={state.posts} 
        newPostText={state.newPostText}
        />    
    )
}



export default MypostsContainer;





