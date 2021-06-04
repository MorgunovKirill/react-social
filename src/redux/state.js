const state =  {
    profilePage: {
        posts: [
            { id: 1, message: "Hi, how are you?", likesCount: 12 },
            { id: 2, message: "It is my first post", likesCount: 13 },
            { id: 3, message: "Yo", likesCount: 58 },
        ],
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
};

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0,  
    }

    state.profilePage.posts.push(newPost);
}


export default state;