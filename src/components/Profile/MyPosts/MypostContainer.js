import Myposts from './Myposts';
import {addPostCreator} from '../../../redux/profileReducer';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (newPost) => {
      dispatch(addPostCreator(newPost))
    }
  }
}

const MypostsContainer = connect(mapStateToProps, mapDispatchToProps)(Myposts)


export default MypostsContainer;





