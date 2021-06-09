const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

export const addMessageCreator = () => ({ type: ADD_MESSAGE })

export const updateNewMessageCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: text
});

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 5,
                message: state.newMessage,
                sender: "own",
            };
            state.messages.push(newMessage);
            state.newMessage = '';
            return state;

        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessage = action.newText;
            return state;

        default:
            return state;
    }
}

export default dialogsReducer;