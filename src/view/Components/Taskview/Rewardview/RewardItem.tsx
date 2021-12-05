import Emoji from "react-emoji-render";
import * as React from "react";
import ReactMarkdown from "react-markdown";
import { Trans } from 'react-i18next'

function RewardItem(props: any) {
    const [state, setState] = React.useState('view')
    const [title, setTitle] = React.useState('')
    const [notes, setNotes] = React.useState('')
    const [coin, setCoin] = React.useState('0')
    if (state === 'view') {
        return (
            <div className="reward-item" id={props.id}>
                <button className="reward-click" id={props.id} onClick={props.onChange}>-{props.reward_value}</button>
                <div>
                    <p className="reward-text"><Emoji text={props.reward_text}></Emoji></p>
                    <ReactMarkdown children={props.reward_notes} />
                </div>
                <button className="task-operation" >
                    <span className="material-icons md-24" id={props.id} onClick={() => setState('edit')}>create</span>
                </button>
                <button className="task-operation">
                    <span className="material-icons md-24" id={props.id} onClick={props.onChange} title="delete">clear</span>
                </button>
            </div>
        )
    } else {
        return (
            <div className="edit-reward-item edit-item">
                <label><Trans>title</Trans>:</label>
                <textarea onChange={event => setTitle(event.target.value)} defaultValue={props.reward_text}></textarea>
                <label><Trans>notes</Trans>:</label>
                <textarea onChange={event => setNotes(event.target.value)} defaultValue={props.reward_notes}></textarea>
                <label><Trans>cost</Trans>:</label>
                <input type="text" onChange={event => setCoin(event.target.value)} defaultValue={props.reward_value}></input>
                <div className="edit-reward-button edit-button">
                    <button className="task-operation"  ><span className="material-icons md-24" id={props.id} onClick={function (e) { props.onChange(e); setState('view') }} title="submit" data-title={title} data-notes={notes} data-coin={coin}>check</span></button>
                    <button className="task-operation"><span className="material-icons md-24" id={props.id} onClick={() => setState('view')} title="cancel">clear</span></button>
                </div>
            </div>
        )

    }
}

export default RewardItem