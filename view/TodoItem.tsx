 import * as React from "react";

function TodoItem(props: any) {
    return (
        <div className="todo-item">
            <input type="checkbox" />
            <p>{props.task.text}</p>
        </div>
    )
}

export default TodoItem