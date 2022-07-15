import React from "react";
import set from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    const dialogs = props.dialogsData.map( dia => {
        return <DialogItem id={dia.id} name={dia.name} />
    })
    const messages = props.messagesData.map( mass => {
        return <Message id={mass.id} massageText={mass.massage} />
    })

    let addNewMessage = React.createRef();
    let alertMessage = () => {
        let text = addNewMessage.current.value;
        alert(text);
    }

    return (
        <div className={set.dialogs}>
            <div className={set.dialogsItems}>
                {dialogs}
            </div>
            <div className={set.massages}>
                Messages:{messages}
            </div>
            <div>
                <textarea ref={addNewMessage}>
                    New message
                </textarea>
            </div>
            <div>
                <button onClick={alertMessage}>
                    Push me
                </button>
            </div>
        </div>
    )
}

export default Dialogs;

