const { createStore } = require('redux');
const reducer = require('./reducers/index');
const {login, logOut} = require('./actions/user');
const {addPost} = require('./actions/post');

const initialSate = {
    user: {
        isLoggingIn: true,
        data: null
    },
    posts: [],
    comments: [],
    favorites: [],
    history: [],
    likes: [],
    followers: []
};

const store = createStore(reducer, initialSate);

store.dispatch(login({
    id: 1,
    name: '제로초',
    admin: true,
}));
console.log(store.getState());

store.dispatch(addPost({
    id: 1,
    userId: 1,
    content: '안녕하세요 링리덧'
}));

store.dispatch(addPost({
    id: 1,
    userId: 1,
    content: '안녕하세요 링리덧'
}));

store.dispatch(addPost({
    id: 1,
    userId: 1,
    content: '안녕하세요 링리덧'
}));

// store.subscribe(() => {
//     console.log('changed');
// })



console.log(store.getState());
