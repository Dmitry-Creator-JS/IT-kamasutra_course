import React from "react";
import {addMessageActionCreator, } from "../../Redux/DialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {WithAuthRedirect} from "../../Hoc/WithAuthRedirect";
import {compose} from "redux";




let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        newMessageText: state.newMessageText
    }
}

let mapStateToPropsForRedirect = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}



let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (newMessageText) => {
            dispatch(addMessageActionCreator(newMessageText));
        }

    }
}

export default compose (
    connect(mapStateToProps, mapDispatchToProps ),
    WithAuthRedirect
) (Dialogs)



