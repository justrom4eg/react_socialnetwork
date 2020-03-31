let renderEntireTree = () => {
    console.log("state was changed")
}

let state = {
    profilePage: {
        posts: [
            {id: "1", message: "How are you", like:"23"},
            {id: "2", message: "My first message", like:"47"}
        ],
        newPostText: "It-kamasutra"
    },
    messagesPage: {
        dialogs: [
            {name: "Dimon", id: "1"},
            {name: "Romu4", id: "2"},
            {name: "Nazar", id: "3"},
            {name: "Nastya", id: "4"},
            {name: "Ira", id: "5"}
        ],
        messages: [
            {id: "1", text: "How are you"},
            {id: "2", text: "How is your it-kamasutra?"},
            {id: "3", text: "I like it"},
            {id: "4", text: "Me too!!!!"},
            {id: "5", text: "Have a nice day!)"}
        ],
    }
};

window.state = state

export const addPost = () => {
    let newPost = {
        id: "3",
        message: state.profilePage.newPostText,
        like: "0"
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = "";
    renderEntireTree(state);
};

export const changeNewPostText = (text1) => {
    state.profilePage.newPostText = text1;
    renderEntireTree(state);
};

export const subscribe = (observer) => {
    renderEntireTree = observer
};

export default state;