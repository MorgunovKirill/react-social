import { connect } from 'react-redux';
import {addMessageCreator, updateNewMessageCreator} from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import WithAuthRedirect from '../../hoc/WithAuthRedirect';


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateTextArea: (body)=> {dispatch(updateNewMessageCreator(body.target.value))}, 
        addMessage: () => {dispatch(addMessageCreator())},
    }
}

let AuthRedirectComponent = WithAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;