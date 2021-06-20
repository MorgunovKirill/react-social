import Myposts from './Myposts';
import {addPostCreator, updateNewPostCreator} from '../../../redux/profileReducer';
import { connect } from 'react-redux';


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





