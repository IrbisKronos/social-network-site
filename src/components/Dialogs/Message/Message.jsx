import React from "react";
import set from "./../Dialogs.module.css";


const Message = (props) => {
    return <div className={set.massage}>{props.massageText}</div>
}

export default Message;