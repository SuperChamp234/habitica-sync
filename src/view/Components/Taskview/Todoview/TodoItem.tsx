import * as React from "react";
import TodoSubTasks from "./TodoSubTasks";
import renderMarkdown from "../markdownRender"

function TodoItem(props: any) {
    var text_html = renderMarkdown(props.todo_text);
    var note_html = renderMarkdown(props.todo_notes);
    return (
        <div className="todo-item" id={props.id}>
            <input type="checkbox" className="checkbox" id={props.id} onChange={props.onChange} checked={props.completed}/>
            <div>
                <p><span dangerouslySetInnerHTML={{__html: text_html}}></span></p>
                <div className="description" dangerouslySetInnerHTML={{__html: note_html}}></div>
                <TodoSubTasks subtasks={props.todo_subtasks} onChange={props.onChange}></TodoSubTasks>
            </div>
        </div>
    )
}

export default TodoItem