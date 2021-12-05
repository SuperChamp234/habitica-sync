import * as React from "react";
import ReactMarkdown from "react-markdown";
import { Trans } from 'react-i18next'

function DailyItem(props: any) {
    const [state, setState] = React.useState('view')
    const [title, setTitle] = React.useState(props.daily_text)
    const [notes, setNotes] = React.useState(props.daily_notes)
    if (state === 'view') {
        return (
            <div className="todo-item" id={props.id}>
                <input type="checkbox" className="checkbox" id={props.id} onChange={props.onChange} checked={props.completed} />
                <div className="todo-content">
                    <ReactMarkdown children={props.daily_text} />
                    <ReactMarkdown children={props.daily_notes} />
                </div>
                <button className="task-operation">
                    <span className="material-icons md-24" id={props.id} onClick={() => setState('edit')}>create</span>
                </button>
                <button className="task-operation">
                    <span className="material-icons md-24" id={props.id} onClick={props.onChange} title="delete">clear</span>
                </button>
            </div>
        )
    } else {
        return (
            <div className="edit-daily-item edit-item">
                <label><Trans>title</Trans>:</label>
                <textarea onChange={event => setTitle(event.target.value)} defaultValue={props.daily_text}></textarea>
                <label><Trans>notes</Trans>:</label>
                <textarea onChange={event => setNotes(event.target.value)} defaultValue={props.daily_notes}></textarea>
                <div className="edit-daily-button edit-button">
                    <button className="task-operation"><span className="material-icons md-24" id={props.id} onClick={function (e) { props.onChange(e); setState('view') }} title="submit" data-title={title} data-notes={notes}>check</span></button>
                    <button className="task-operation"><span className="material-icons md-24" id={props.id} onClick={() => setState('view')} title="cancel">clear</span></button>
                </div>
            </div>
        )
    }
}

export default DailyItem