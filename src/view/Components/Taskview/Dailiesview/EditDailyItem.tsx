import Emoji from "react-emoji-render";
import * as React from "react";
import ReactMarkdown from "react-markdown";


function EditDailyItem(props: any) {
    return (
            <div className="edit-todo-item" id={props.id}>
                <input type="checkbox" className="checkbox" id={props.id} onChange={props.onChange} checked={props.completed} />
                <div className="todo-content">
                    <p><Emoji text={props.daily_text}></Emoji></p>
                    <ReactMarkdown children={props.daily_notes} />
                </div>
                
                <button className="task-operation" >
                    <span className="material-icons md-24" id={props.id} onClick={props.onChange}>create</span>
                </button>
                <button className="task-operation">
                    <span className="material-icons md-24" id={props.id} onClick={props.onChange}>clear</span>
                </button>
            </div>
    )
}

export default EditDailyItem