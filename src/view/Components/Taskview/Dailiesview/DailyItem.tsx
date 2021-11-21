import Emoji from "react-emoji-render";
import * as React from "react";
import ReactMarkdown from "react-markdown";

function DailyItem(props: any) {
    return (
        <div className="todo-item" id={props.id}>
            <input type="checkbox" className="checkbox" id={props.id} onChange={props.onChange} checked={props.completed} />
            <div>
                <p><Emoji text={props.daily_text}></Emoji></p>
                <ReactMarkdown children={props.daily_notes} />
            </div>

        </div>
    )
}

export default DailyItem