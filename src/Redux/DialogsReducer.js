

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

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
    newMessageText: 'input new text'
};

 const dialogsReducer = (state = initialState, action) => {




     switch (action.type) {
         case ADD_MESSAGE: {
             let newMessage = {
                 id: 5,
                 message: state.newMessageText
             };
             let stateCopy = {...state};
             stateCopy.messages = [...state.messages];
             stateCopy.messages.push(newMessage);
             stateCopy.newMessageText = '';
             return stateCopy;
         }
         case UPDATE_NEW_MESSAGE_TEXT: {
             let stateCopy = {...state};
             stateCopy.newMessageText = action.newTextMessage;
             return stateCopy;
         }
         default:
             return state;
     }



}

 export const addMessageActionCreator = () => ({
     type: ADD_MESSAGE
 })

 export const updateNewMessageTextActionCreator = (textMessage) =>
     ({
         type: UPDATE_NEW_MESSAGE_TEXT,
         newTextMessage: textMessage
     })

export default dialogsReducer;