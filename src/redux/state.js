const ADD_POST = 'ADD_POST';
const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';


const store = {
    _subscriber() {
        console.log('no subscribers yet');
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._subscriber = observer;
    },

    _state: {
        profilePage: {
            posts: [
                { id: 1, message: "Hi, how are you?", likesCount: 12 },
                { id: 2, message: "It is my first post", likesCount: 13 },
                { id: 3, message: "Yo", likesCount: 58 },
            ],
            newPostText: '',
        },
        dialogsPage: {
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
        },
        sideBar: {
            friends: [ 
                {name: "Andrey", id: 1},
                {name: "Sveta", id: 2},
                {name: "Misha", id: 3},
                {name: "Alexey", id: 4},
                {name: "Viktor", id: 5},
            ]
        } 
    },
    
    dispatch(action) {
        switch(action.type) {
            case ADD_POST:  
                let newPost = {
                    id: 5,
                    message:  this._state.profilePage.newPostText,
                    likesCount: 0,  
                }
            
                this._state.profilePage.posts.push(newPost);
                this._state.profilePage.newPostText = '';
                this._subscriber(this._state);
                break;

            case ADD_MESSAGE: 
                let newMessage = {
                    id: 5,
                    message: this._state.dialogsPage.newMessage,
                    sender: "own",  
                }
            
                this._state.dialogsPage.messages.push(newMessage);
                this._state.dialogsPage.newMessage = '';
                this._subscriber(this._state);
                break;

            case UPDATE_NEW_POST_TEXT:
                this._state.profilePage.newPostText = action.newText;
                this._subscriber(this._state);
                break;

            case UPDATE_NEW_MESSAGE_TEXT:
                this._state.dialogsPage.newMessage = action.newText;
                this._subscriber(this._state);
                break;

            default: 
                this._subscriber(this._state);
            }                       
    },
    
   
    // addPost() {
    //     let newPost = {
    //         id: 5,
    //         message:  this._state.profilePage.newPostText,
    //         likesCount: 0,  
    //     }
    
    //     this._state.profilePage.posts.push(newPost);
    //     this._state.profilePage.newPostText = '';
    //     this._subscriber(this._state);
    // },

    // addMessage() {
    //     let newMessage = {
    //         id: 5,
    //         message: this._state.dialogsPage.newMessage,
    //         sender: "own",  
    //     }
    
    //     this._state.dialogsPage.messages.push(newMessage);
    //     this._state.dialogsPage.newMessage = '';
    //     this._subscriber(this._state);
    // },
    
    // updateNewPostText(newText) {
    //     this._state.profilePage.newPostText = newText;
    //     this._subscriber(this._state);
    // },
    
    // updateNewMessageText(newText) {
    //     this._state.dialogsPage.newMessage = newText;
    //     this._subscriber(this._state);
    // },  
}

export const addPostActionCreator = () => ({ type: 'ADD_POST'});


export const addMessageActionCreator = () => ({ type: 'ADD_MESSAGE' })
  
export const updateNewPostActionCreator = (text) => ({
        type: 'UPDATE_NEW_POST_TEXT',
        newText: text
    })

export const updateNewMessageActionCreator = (text) => ({
        type: 'UPDATE_NEW_MESSAGE_TEXT',
        newText: text
    });

export default store;