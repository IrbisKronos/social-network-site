let rerenderEntireTree = () => {
    console.log("State was changed");
}

let state = {
    profilePage: {
        postData: [
            {id:0, message: "Hi, how are you?", likesCount:3},
            {id:1, message: "It's my first post", likesCount:7},
            {id:2, message: "It's my second post", likesCount:5},
            {id:3, message: "boom", likesCount:2},
            {id:4, message: "aaaaaaaa", likesCount:0},
        ],
        newPostText: "it-kamasutra"
    },
    dialogsPage: {
        dialogsData: [
            {id: 0, name: "Niko"},
            {id: 1, name: "Kira"},
            {id: 2, name: "Stefan"},
            {id: 3, name: "Kristof"},
            {id: 4, name: "Mary"},
            {id: 5, name: "Josephine"},
        ],
        messagesData: [
            {id: 0, massage: "Hello, world"},
            {id: 1, massage: "Hi"},
            {id: 2, massage: "More details"},
            {id: 3, massage: "More details"},
            {id: 4, massage: "More details"},
            {id: 5, massage: "More details"},
        ]
    }
}

window.state = state;

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.postData.push(newPost);
    state.profilePage.newPostText = "";
    rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export default state;