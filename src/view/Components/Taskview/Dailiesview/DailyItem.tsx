import Emoji from "react-emoji-render";
import * as React from "react";
import ReactMarkdown from "react-markdown";
import DailySubTasks from "./DailySubTasks";

function DailyItem(props: any) {
    return (
        <div className="todo-item" id={props.id}>
            <input type="checkbox" className="checkbox" id={props.id} onChange={props.onChange} checked={props.completed} />
            <div>
                <p><Emoji text={props.daily_text}></Emoji></p>
                <ReactMarkdown className="description" children={props.daily_notes} />
                {console.log(props.checklist)}
                <DailySubTasks subtasks={props.daily_subtasks} onChange={props.onChange}></DailySubTasks>
            </div>

        </div>
    )
}

export default DailyItem