import React from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../Redux/DialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";




let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        newMessageText: state.newMessageText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText: (textMessage) => {

            dispatch( updateNewMessageTextActionCreator(textMessage));
        },
        addMessage: () => {
            dispatch(addMessageActionCreator());
        }

    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps )(Dialogs );

export default DialogsContainer;