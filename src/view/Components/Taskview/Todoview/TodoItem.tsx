import Emoji from "react-emoji-render";
import * as React from "react";
import ReactMarkdown from "react-markdown";

function TodoItem(props: any) {
    return (
        <div className="todo-item" id={props.id}>
            <input type="checkbox" className="checkbox" id={props.id} onChange={props.onChange} checked={props.completed}/>
            <div>
                <p><Emoji text={props.todo_text}></Emoji></p>
                <ReactMarkdown children={props.todo_notes} />
            </div>
        </div>
    )
}

export default TodoItem