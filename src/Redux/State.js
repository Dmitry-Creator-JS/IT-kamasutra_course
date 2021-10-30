
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let store = {
    _state: {

        profilePage: {
            posts: [
                {id: 1, message: 'what is it', likes: 12},
                {id: 2, message: 'will be working?', likes: 11}
            ],
            newPostText: 'IT KAmas'

        },

        dialogsPage: {
            messages: [
                {id: 1, message: "Hi"},
                {id: 2, message: "How are u?"},
                {id: 3, message: "Where is Greg"}

            ],
            dialogs: [
                {id: 1, name: "Dima"},
                {id: 2, name: "Sergay"},
                {id: 3, name: "Vitek"},
                {id: 4, name: "GayLord"},
                {id: 5, name: "Sveta"},
                {id: 6, name: "sasha"},
                {id: 7, name: "Valera"}
            ]

        },

        siteBar: {}

    },
    _callSubscriber() {
        console.log('State is changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;


    },


    dispatch(action) {
        if (action.type === ADD_POST) {
            let NewPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likes: 0
            };
            this._state.profilePage.posts.push(NewPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }

}
   export const addPostActionCreator = () => ({type: ADD_POST})


   export const updateNewPostTextActionCreator = (text) =>
       ({type: UPDATE_NEW_POST_TEXT, newText: text})




window.store = store;
export default store;