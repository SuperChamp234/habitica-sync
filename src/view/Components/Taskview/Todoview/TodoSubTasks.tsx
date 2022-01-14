import * as React from "react";
import renderMarkdown from "../markdownRender";

function TodoSubTasks(props: any) {
    if (props.subtasks) {
        const subtasks = props.subtasks.map((subtask: any) => {
            let subtask_text = renderMarkdown(subtask.text);
            return (
                <div className="subtask" id={subtask.id}>
                    <input type="checkbox" className="checkbox" onChange={props.onChange} checked={subtask.completed} id={subtask.id}/>
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
export default TodoSubTasks