import Myposts from './Myposts';
import {addPostCreator, updateNewPostCreator} from '../../../redux/profileReducer';
import { connect } from 'react-redux';


// const MypostsContainer = (props) => {     
//   let state = props.store.getState().profilePage;

//   let addPost = () => {
//     props.store.dispatch(addPostCreator());
//   }

//   let updateTextArea = (evt) => {
//     let text = evt.target.value;
//     props.store.dispatch(updateNewPostCreator(text));
//   }


//     return (  
//         <Myposts 
//         updateTextArea={updateTextArea} 
//         addPost={addPost} 
//         posts={state.posts} 
//         newPostText={state.newPostText}
//         />    
//     )
// }

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostCreator())
    },
    updateTextArea: (evt) => {
      dispatch(updateNewPostCreator(evt.target.value));
    }
  }
}

const MypostsContainer = connect(mapStateToProps, mapDispatchToProps)(Myposts)


export default MypostsContainer;





