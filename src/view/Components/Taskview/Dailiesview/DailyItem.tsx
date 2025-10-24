import * as React from "react";
import DailySubTasks from "./DailySubTasks";
import renderMarkdown from "../markdownRender";

function DailyItem(props: any) {
    var text_html = renderMarkdown(props.daily_text);
    var note_html = renderMarkdown(props.daily_notes);
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
            {/* {console.log(props.checklist)} */}
            <DailySubTasks key={props.daily_subtasks.id} subtasks={props.daily_subtasks} onChangeChecklistItem={props.onChangeChecklistItem}></DailySubTasks>
        </div>


    )
}

export default DailyItem