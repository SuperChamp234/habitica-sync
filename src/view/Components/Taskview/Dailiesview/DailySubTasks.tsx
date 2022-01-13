import Emoji from "react-emoji-render";
import * as React from "react";

function DailySubTasks(props: any) {
    if (props.subtasks) {
        const subtasks = props.subtasks.map((subtask: any) => {
            return (
                <div className="subtask" id={subtask.id}>
                    <input type="checkbox" className="checkbox" onChange={props.onChange} checked={subtask.completed} />
                    <p id={subtask.id}><Emoji text={subtask.text}></Emoji></p>
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