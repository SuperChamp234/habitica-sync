import Emoji from "react-emoji-render";
import * as React from "react";
import ReactMarkdown from "react-markdown";

function DailyItem(props: any) {
    return (
        <div className="todo-item" id={props.id}>
            {console.log(props)}
            <input type="checkbox" className="checkbox" id={props.id} onChange={props.onChange} checked={props.completed} />
            <div className="todo-content">
                <p><Emoji text={props.daily_text}></Emoji></p>
                <ReactMarkdown children={props.daily_notes} />
            </div>
            <button className="modify-todo" id={props.id}>
                <span className="material-icons md-24">create</span>
            </button>
            <button className="delete-todo" id={props.id}>
                <span className="material-icons md-24">clear</span>
            </button>


        </div>
    )
}

export default DailyItem