import { connect } from 'react-redux';
import {addMessageCreator, updateNewMessageCreator} from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';


// const DialogsContainer = (props) => {
//     let state = props.store.getState().dialogsPage;

//     let addMessage = () => {
//         props.store.dispatch(addMessageCreator())
//       };
  
//     let updateTextArea = (body) => {
//         let text = body.target.value;
//         props.store.dispatch(updateNewMessageCreator(text));        
//     };

//     return (
//         <Dialogs dialogsPage={state} addMessage={addMessage} updateTextArea={updateTextArea} />
//     )
// }

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