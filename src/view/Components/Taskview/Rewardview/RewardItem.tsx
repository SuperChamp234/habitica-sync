import Emoji from "react-emoji-render";
import * as React from "react";
import ReactMarkdown from "react-markdown";
function RewardItem(props: any) {
    return (
        <div className="reward-item" id={props.id}>
            <button className="reward-click" id={props.id} onClick={props.onChange}>-{props.reward_value}</button>
            <div>
            <p className="reward-text"><Emoji text={props.reward_text}></Emoji></p>
            <ReactMarkdown children={props.reward_notes} />
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

export default RewardItem