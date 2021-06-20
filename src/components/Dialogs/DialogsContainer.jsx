import { connect } from 'react-redux';
import {addMessageCreator, updateNewMessageCreator} from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateTextArea: (body)=> {dispatch(updateNewMessageCreator(body.target.value))}, 
        addMessage: () => {dispatch(addMessageCreator())},
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;