 import React from "react";
import s from './DialogItem.module.css'
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <div className={s.dialogImg}>

                <img src="https://bipbap.ru/wp-content/uploads/2017/05/VOLKI-krasivye-i-ochen-umnye-zhivotnye.jpg" alt=""/>
            </div>

            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}



export default DialogItem;