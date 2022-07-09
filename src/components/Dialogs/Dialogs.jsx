import React from "react";
import set from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const Dialogs = () => {

    const activeLink = ({isActive}) => isActive ? `${set.active} ${set.dialog}` : set.dialog;

    const Dialog = (props) => {
        return (
            <div className = {set.dialog}>
                <NavLink className = {activeLink} to={"/dialogs/" + props.id}>{props.name}</NavLink>
            </div>
        )
    }

    const Massage = (props) => {
        return <div className={set.massage}>{props.massageText}</div>
    }

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
    ]

    return (
        <div className={set.dialogs}>
            <div className={set.dialogsItems}>
                <Dialog id={dialogsData[0].id} name={dialogsData[0].name} />
                <Dialog id={dialogsData[1].id} name={dialogsData[1].name} />
                <Dialog id={dialogsData[2].id} name={dialogsData[2].name} />
                <Dialog id={dialogsData[3].id} name={dialogsData[3].name} />
                <Dialog id={dialogsData[4].id} name={dialogsData[4].name} />
                <Dialog id={dialogsData[5].id} name={dialogsData[5].name} />
            </div>
            <div className={set.massages}>
                <Massage id={massagesData[0].id} massageText={massagesData[0].massage} />
                <Massage id={massagesData[1].id} massageText={massagesData[1].massage} />
                <Massage id={massagesData[2].id} massageText={massagesData[2].massage} />
            </div>
        </div>
    )
}

export default Dialogs;

