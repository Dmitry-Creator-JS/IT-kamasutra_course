import React from "react";
import s from './Dialogs.module.css'
import Message from "./Message/Messages";
import DialogItem from "./DialogItem/DialogItem";
import Redirect from 'react-router-dom/es/Redirect'
import {Field, reduxForm} from "redux-form";
import {TextArea} from "../Common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";



const Dialogs = (props) => {

  let state = props.dialogsPage;


    let dialogsElements = state.dialogs
        .map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);


    let messagesElements = state.messages
        .map(m => <Message message={m.message} key={m.id}/>);



    let addNewMessage = (values) => {
        props.addMessage(values.newMessageText);
    }
    if (!props.isAuth)  return <Redirect to={'/Login'} />;


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>

            </div>
            <AddMessageFormRedux onSubmit={addNewMessage} />
        </div>
    )
}

const maxLength50 =  maxLengthCreator(50);

const AddMessageForm = (props) => {
    return  <form onSubmit={props.handleSubmit} >
        <div>
            <Field component= {TextArea} validate={[required, maxLength50]} name='newMessageText' placeholder='Enter text' />

        </div>
        <div>
            <button >addMessage </button>
        </div>


    </form>
}

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm);

export default Dialogs;