import Emoji from "react-emoji-render";
import * as React from "react";
import ReactMarkdown from "react-markdown";

function DailyItem(props: any) {
    const [state, setState] = React.useState('view')
    const [title, setTitle] = React.useState('')
    const [notes, setNotes] = React.useState('')
    if (state == 'view') {
        return (
            <div className="todo-item" id={props.id}>
                <input type="checkbox" className="checkbox" id={props.id} onChange={props.onChange} checked={props.completed} />
                <div className="todo-content">
                    <p><Emoji text={props.daily_text}></Emoji></p>
                    <ReactMarkdown children={props.daily_notes} />
                </div>
                <button className="task-operation"  >
                    <span className="material-icons md-24" id={props.id} onClick={() => setState('edit')}>create</span>
                </button>
                <button className="task-operation">
                    <span className="material-icons md-24" id={props.id} onClick={props.onChange} title="delete">clear</span>
                </button>
            </div>
        )
    } else {
        return (
            <div className="edit-daily-item">
                <input type="text" onChange={event => setTitle(event.target.value)} defaultValue={props.daily_text}></input>
                <input type="text" onChange={event => setNotes(event.target.value)} defaultValue={props.daily_notes}></input>
                <button className="task-operation"  ><span className="material-icons md-24" id={props.id} onClick={function (e) { props.onChange(e); setState('view') }} title="submit" data-title={title} data-notes={notes}>check</span></button>
                <button className="task-operation"><span className="material-icons md-24" id={props.id} onClick={() => setState('view')} title="cancel">clear</span></button>
            </div>
        )
    }
}

export default DailyItem