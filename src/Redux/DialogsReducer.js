
const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
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

};

 const dialogsReducer = (state = initialState, action) => {

     switch (action.type) {
         case ADD_MESSAGE:
             let newMessage = {
                 id: 5,
                 message: action.newMessageText
             };
            return  {
                 ...state,
                 messages: [...state.messages, (newMessage) ]
             };

         default:
             return state;
     }



}

 export const addMessageActionCreator = (newMessageText) => ({
     type: ADD_MESSAGE,
     newMessageText
 })



export default dialogsReducer;