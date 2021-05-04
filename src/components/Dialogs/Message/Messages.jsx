import React from "react";
import s from './Message.module.css'





const Message = (props) => {
    return (
        <div>
       

            <div className={s.message}>
                <img src="https://telecomdom.com/wp-content/uploads/2020/02/kartinki-na-telefon-5-576x1024.jpg" alt=""/>
                
            {props.message}
        </div>
        </div>
    )
}



export default Message;