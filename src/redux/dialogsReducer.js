const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

export const addMessageCreator = () => ({ type: ADD_MESSAGE })

export const updateNewMessageCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: text
});

let initialState = {
    dialogs: [
        { name: "Dima", id: "1" },
        { name: "Andrey", id: "2" },
        { name: "Sveta", id: "3" },
        { name: "Misha", id: "4" },
        { name: "Valera", id: "5" },
    ],
    messages: [
        { message: "Hi", id: "1", sender: "own"},
        { message: "How are you?", id: "2", sender: "own"},
        { message: "Yo", id: "3", sender: "other"},
        { message: "I'm fine", id: "4", sender: "other"},
    ],
    newMessage: '',
}

const dialogsReducer = (state = initialState, action) => {
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