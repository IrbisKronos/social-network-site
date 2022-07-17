import React from "react";
import set from "./../Dialogs.module.css";


const Message = (props) => {
    return <div className={set.massage}>{props.message}</div>
}

export default Message;