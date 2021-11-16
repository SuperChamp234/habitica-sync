import Emoji from "react-emoji-render";
import * as React from "react";

function TodoItem(props: any) {
    return (
        <div className="todo-item" id={props.id}>
            <input type="checkbox" className="checkbox" id={props.id} onChange={props.onChange} checked={props.completed}/>
            <p><Emoji text ={props.todo_text}></Emoji></p>
        </div>
    )
}

export default TodoItem