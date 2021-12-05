import Emoji from "react-emoji-render";
import * as React from "react";
import ReactMarkdown from "react-markdown";
import { Trans } from 'react-i18next'

function HabitItem(props: any) {
    const [state, setState] = React.useState('view')
    const [title, setTitle] = React.useState(props.habit_text)
    const [notes, setNotes] = React.useState(props.habit_notes)
    if (state == 'view') {
        return (
            <div className="habit-item" id={props.id}>
                <button className="habit-plus" id={props.id} onClick={props.onChange} title="plus">
                    +{props.upCount}
                </button>
                <button className="habit-minus" id={props.id} onClick={props.onChange} title="mins">
                    -{props.downCount}
                </button>
                <div>
                    <p className="habit-text"><Emoji text={props.habit_text}></Emoji></p>
                    <ReactMarkdown children={props.habit_notes} />
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
            <div className="edit-habit-item edit-item">
                <label><Trans>title</Trans>:</label>
                <textarea onChange={event => setTitle(event.target.value)} defaultValue={props.habit_text}></textarea>
                <label><Trans>notes</Trans>:</label>
                <textarea onChange={event => setNotes(event.target.value)} defaultValue={props.habit_notes}></textarea>
                <div className="edit-habit-button edit-button">
                    <button className="task-operation"><span className="material-icons md-24" id={props.id} onClick={function (e) { props.onChange(e); setState('view') }} title="submit" data-title={title} data-notes={notes}>check</span></button>
                    <button className="task-operation"><span className="material-icons md-24" id={props.id} onClick={() => setState('view')} title="cancel">clear</span></button>
                </div>
            </div>
        )
    }

}

export default HabitItem