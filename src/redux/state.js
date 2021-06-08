const store = {
    _subscriber() {
        console.log('no subscribers yet');
    },

    getState() {
        return this._state;
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
    
    subscribe(observer) {
        this._subscriber = observer;
    },

    addPost() {
        let newPost = {
            id: 5,
            message:  this._state.profilePage.newPostText,
            likesCount: 0,  
        }
    
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._subscriber(this._state);
    },

    addMessage() {
        let newMessage = {
            id: 5,
            message: this._state.dialogsPage.newMessage,
            sender: "own",  
        }
    
        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.newMessage = '';
        this._subscriber(this._state);
    },
    
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._subscriber(this._state);
    },
    
    updateNewMessageText(newText) {
        this._state.dialogsPage.newMessage = newText;
        this._subscriber(this._state);
    },  
}

// let rerenderEntireTree = () => {
//     console.log('state has been changed');
// }

// const state =  {
//     profilePage: {
//         posts: [
//             { id: 1, message: "Hi, how are you?", likesCount: 12 },
//             { id: 2, message: "It is my first post", likesCount: 13 },
//             { id: 3, message: "Yo", likesCount: 58 },
//         ],
//         newPostText: '',
//     },
//     dialogsPage: {
//         dialogs: [
//             { name: "Dima", id: "1" },
//             { name: "Andrey", id: "2" },
//             { name: "Sveta", id: "3" },
//             { name: "Misha", id: "4" },
//             { name: "Valera", id: "5" },
//         ],
//         messages: [
//             { message: "Hi", id: "1", sender: "own"},
//             { message: "How are you?", id: "2", sender: "own"},
//             { message: "Yo", id: "3", sender: "other"},
//             { message: "I'm fine", id: "4", sender: "other"},
//         ],
//         newMessage: '',
//     },
//     sideBar: {
//         friends: [ 
//             {name: "Andrey", id: 1},
//             {name: "Sveta", id: 2},
//             {name: "Misha", id: 3},
//             {name: "Alexey", id: 4},
//             {name: "Viktor", id: 5},
//         ]
//     } 
// };

// export const addPost = () => {
//     let newPost = {
//         id: 5,
//         message: state.profilePage.newPostText,
//         likesCount: 0,  
//     }

//     state.profilePage.posts.push(newPost);
//     state.profilePage.newPostText = '';
//     rerenderEntireTree(state);
// };

// export const addMessage = () => {
//     let newMessage = {
//         id: 5,
//         message: state.dialogsPage.newMessage,
//         sender: "own",  
//     }

//     state.dialogsPage.messages.push(newMessage);
//     state.dialogsPage.newMessage = '';
//     rerenderEntireTree(state);
// };

// export const updateNewPostText = (newText) => {
//     state.profilePage.newPostText = newText;
//     rerenderEntireTree(state);
// };

// export const updateNewMessageText = (newText) => {
//     state.dialogsPage.newMessage = newText;
//     rerenderEntireTree(state);
// };

// export const subscribe = (observer) => {
//     rerenderEntireTree = observer;
// }


// export default state;
export default store;