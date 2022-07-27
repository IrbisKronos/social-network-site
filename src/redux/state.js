let store = {
    _state: {
        profilePage: {
            posts: [
                {id:0, message: "Hi, how are you?", likesCount:3},
                {id:1, message: "It's my first post", likesCount:7},
                {id:2, message: "It's my second post", likesCount:5},
                {id:3, message: "boom", likesCount:2},
                {id:4, message: "aaaaaaaa", likesCount:0},
            ],
            newPostText: "it-kamasutra"
        },
        dialogsPage: {
            dialogs: [
                {id: 0, name: "Niko"},
                {id: 1, name: "Kira"},
                {id: 2, name: "Stefan"},
                {id: 3, name: "Kristof"},
                {id: 4, name: "Mary"},
                {id: 5, name: "Josephine"},
            ],
            messages: [
                {id: 0, massage: "Hello, world"},
                {id: 1, massage: "Hi"},
                {id: 2, massage: "More details"},
                {id: 3, massage: "More details"},
                {id: 4, massage: "More details"},
                {id: 5, massage: "More details"},
            ]
        }
    },
    getState () {
        return this._state
    },
    _callSubscriber() {
        console.log('State changed');
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },

    dispatch (action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = "";
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
},
// addPost () {
//     let newPost = {
//         id: 5,
//         message: this._state.profilePage.newPostText,
//         likesCount: 0
//     };
// this._state.profilePage.posts.push(newPost);
// this._state.profilePage.newPostText = "";
// this._callSubscriber(this._state);
// },
// updateNewPostText (newText) {
//     this._state.profilePage.newPostText = newText;
//     this._callSubscriber(this._state);
// },

}

window.store = store;

export default store;