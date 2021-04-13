import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";



const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}
        </div>
    )
}

const Dialogs = (props) => {
    return (
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                  <DialogItem name="Dima" id="1"/>
                  <DialogItem name="Sergay" id="2"/>
                  <DialogItem name="Vitek" id="3"/>
                  <DialogItem name="GayLord" id="4"/>
                  <DialogItem name="Sveta" id="5"/>
                  <DialogItem name="sasha" id="6"/>
                  <DialogItem name="Valera" id="7"/>

                </div>
                    <div className={s.messages}>
                        <Message message = "Hi" />
                        <Message message = "How are u?" />
                        <Message message = "Where is Greg" />
                    </div>
            </div>

        );
    }

export default Dialogs;