let initialState = {
    friends: [ 
        {name: "Andrey", id: 1},
        {name: "Sveta", id: 2},
        {name: "Misha", id: 3},
        {name: "Alexey", id: 4},
        {name: "Viktor", id: 5},
    ]
};


const sidebarReducer = (state = initialState, action) => {    
    return state;
}


export default sidebarReducer;