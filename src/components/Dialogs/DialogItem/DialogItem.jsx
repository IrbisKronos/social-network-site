import React from "react";
import set from ".//../Dialogs.module.css";
import {NavLink} from "react-router-dom";


    const activeLink = ({isActive}) => isActive ? `${set.active} ${set.dialog}` : set.dialog;

    const DialogItem = (props) => {
        return (
            <div className = {set.dialog}>
                <NavLink className = {activeLink} to={"/dialogs/" + props.id}>{props.name}</NavLink>
            </div>
        )
    }

export default DialogItem;

