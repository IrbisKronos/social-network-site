import React from "react";
import set from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = () => {

    let dialogsData = [
        {id: 0, name: "Niko"},
        {id: 1, name: "Kira"},
        {id: 2, name: "Stefan"},
        {id: 3, name: "Kristof"},
        {id: 4, name: "Mary"},
        {id: 5, name: "Josephine"},
    ]

    let massagesData = [
        {id: 0, massage: "Hello, world"},
        {id: 1, massage: "Hi"},
        {id: 2, massage: "More details"},
        {id: 3, massage: "More details"},
        {id: 4, massage: "More details"},
        {id: 5, massage: "More details"},
    ]

    const dialogs = dialogsData.map( dia => {
        return <DialogItem id={dia.id} name={dia.name} />
    })

    const messages = massagesData.map( mass => {
        return <Message id={mass.id} massageText={mass.massage} />
    })

    return (
        <div className={set.dialogs}>
            <div className={set.dialogsItems}>
                {dialogs}
            </div>
            <div className={set.massages}>
                {messages}
            </div>
        </div>
    )
}

export default Dialogs;

