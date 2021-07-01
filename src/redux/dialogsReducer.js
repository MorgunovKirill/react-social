const ADD_MESSAGE = 'ADD_MESSAGE';

export const addMessageCreator = (newMessageBody) => ({ type: ADD_MESSAGE, newMessageBody })


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
}

const dialogsReducer = (state = initialState, action) => {
   
    switch (action.type) {
        case ADD_MESSAGE: 
            let newMessage = {
                id: 5,
                message: action.newMessageBody,
                sender: "own",
            };          
            return  {
                ...state,               
                messages: [...state.messages, newMessage],               
            };  

        default:
            return state;
    }
}

export default dialogsReducer;