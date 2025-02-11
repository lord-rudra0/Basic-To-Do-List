import React from "react";
import InputArea from "./InputArea";

function ToDoList(props) {


    return (
        <div
            onClick={
                (() => props.onChecked(props.id))
            }>
            <li>{props.text}</li>
        </div>
    )
}

export default ToDoList;