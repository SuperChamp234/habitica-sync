import * as React from "react";
import renderMarkdown from "../markdownRender";

function DailySubTasks(props: any) {

    if (props.subtasks) {
        const subtasks = props.subtasks.map((subtask: any) => {
            let subtask_text = renderMarkdown(subtask.text);
            return (
                <div className="subtask" id={subtask.id} key={subtask.id} >
                    <input id={subtask.id} type="checkbox" className="checkbox-checklist" onChange={props.onChangeChecklistItem} checked={subtask.completed} />
                    <p id={subtask.id}><span dangerouslySetInnerHTML={{__html: subtask_text}}></span></p>
                </div>
            )
        });
        return subtasks
    }
    else {
        return <div></div>
    }
}
export default DailySubTasks