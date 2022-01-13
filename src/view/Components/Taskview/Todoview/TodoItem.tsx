import Emoji from "react-emoji-render";
import * as React from "react";
import ReactMarkdown from "react-markdown";
import TodoSubTasks from "./TodoSubTasks";

function TodoItem(props: any) {
    return (
        <div className="todo-item" id={props.id}>
            <input type="checkbox" className="checkbox" id={props.id} onChange={props.onChange} checked={props.completed}/>
            {/* <p><Emoji text ={props.todo_text}></Emoji></p> */}
            <div>
                <p><Emoji text={props.todo_text}></Emoji></p>
                <ReactMarkdown className="description" children={props.todo_notes} />
                <TodoSubTasks subtasks={props.todo_subtasks} onChange={props.onChange}></TodoSubTasks>
            </div>
        </div>
    )
}

export default TodoItem