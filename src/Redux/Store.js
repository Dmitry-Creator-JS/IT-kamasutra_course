import profileReducer from './ProfileReducer'
import dialogsReducer from './DialogsReducer'
import sidebarReducer from './SidebarReducer'


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
            ],
            newMessageText: 'input new text'
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
        this._state.profilePage = profileReducer( this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);





        }


}






window.store = store;
export default store;