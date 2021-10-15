 import * as React from "react";

function TodoItem(props: any) {
    return (
        <div className="todo-item" id={props.id}>
            <input type="checkbox" id={props.id} onChange={props.onChange} checked={props.completed}/>
            <p>{props.task.text}</p>
        </div>
    )
}

export default TodoItem