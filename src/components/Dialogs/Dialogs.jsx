import React from "react";
import set from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const Dialogs = () => {

    const activeLink = ({isActive}) => isActive ? `${set.active} ${set.dialog}` : set.dialog;

    // const Dialog = (props) => {
    //     return (
    //         <div className={`${set.dialog} ${set.active}`}>
    //             <NavLink className = {activeLink} to={"/dialogs/" + props.id}>{props.name}</NavLink>
    //         </div>
    //     )
    // }
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

    return (
        <div className={set.dialogs}>
            <div className={set.dialogsItems}>
                <Dialog id={1} name={"Niko"} />
                <Dialog id={2} name={"Kira"} />
                <Dialog id={3} name={"Stefan"} />
                <Dialog id={4} name={"Kristof"} />
                <Dialog id={5} name={"Mary"} />
                <Dialog id={6} name={"Josephine"} />
            </div>
            <div className={set.massages}>
                <Massage massageText = "Hello, world" />
                <Massage massageText = "Hi" />
                <Massage massageText = "More details" />
            </div>
        </div>
    )
}

export default Dialogs;

