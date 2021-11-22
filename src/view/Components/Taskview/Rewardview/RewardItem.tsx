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
            <button className="modify-reward" id={props.id}>
                <span className="material-icons md-24">create</span>
            </button>
            <button className="delete-reward" id={props.id}>
                <span className="material-icons md-24">clear</span>
            </button>
        </div>
    )
}

export default RewardItem