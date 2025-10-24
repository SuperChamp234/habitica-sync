import * as React from "react";
import TodoSubTasks from "./TodoSubTasks";
import renderMarkdown from "../markdownRender"
import moment from "moment";


function TodoItem(props: any) {
    var dueDate = (props.dueDate == null) ? "" : ("Due Date:" + (moment(props.dueDate).format(props.dueDateFormat)));
    var text_html = renderMarkdown(props.todo_text);
    var note_html = renderMarkdown(props.todo_notes);
    return (
        <div className="todo-item" id={props.id}>
            <div className="todo-text-row">
                <input type="checkbox" className="checkbox" id={props.id} onChange={props.onChange} checked={props.completed} />
                <div className="todo-text-container" title={props.todo_text}>
                    <span dangerouslySetInnerHTML={{ __html: text_html }}></span>
                </div>
                <div className="delete-button">
                    <button className="delete-button" id={props.id} onClick={() => props.onDelete(props.id)}>
                        Del
                    </button>
                </div>
            </div>
            <div className="description" dangerouslySetInnerHTML={{ __html: note_html }}></div>
            <TodoSubTasks todoID={props.id} subtasks={props.todo_subtasks} onChange={props.onChangeChecklistItem}></TodoSubTasks>
            <div className="due-date">{dueDate}</div>
        </div>
    )
}

export default TodoItem