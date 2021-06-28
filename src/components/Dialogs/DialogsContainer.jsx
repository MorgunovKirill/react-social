import { connect } from 'react-redux';
import {addMessageCreator, updateNewMessageCreator} from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import WithAuthRedirect from '../../hoc/WithAuthRedirect';
import { compose } from 'redux';


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

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect
)(Dialogs);