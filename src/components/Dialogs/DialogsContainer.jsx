import { connect } from 'react-redux';
import {addMessageCreator} from '../../redux/dialogsReducer';
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
        addMessage: (newMessageBody) => {dispatch(addMessageCreator(newMessageBody))},
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect
)(Dialogs);