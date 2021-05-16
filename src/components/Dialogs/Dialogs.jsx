import React from "react";
import s from './Dialogs.module.css'
import Message from "./Message/Messages";
import DialogItem from "./DialogItem/DialogItem";




const Dialogs = (props) => {


  let state = props.dialogsPage;


    let newMessage = React.createRef();

    let dialogsElements = state.dialogs
        .map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);


    let messagesElements = state.messages
        .map(m => <Message message={m.message} key={m.id}/>);



    let  onAddMessage = () => {
        props.addMessage();

    }

    let onMessageChange = () => {
        let textMessage = newMessage.current.value;
       props.updateNewMessageText(textMessage);


    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}

            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                <div>
                    <textarea  onChange={onMessageChange} ref={newMessage} value={props.newMessageText} > </textarea>
                </div>
                <div>
                    <button onClick={ onAddMessage}>addMessage </button>
                </div>


                </div>
            </div>

        </div>
    )
}


export default Dialogs;