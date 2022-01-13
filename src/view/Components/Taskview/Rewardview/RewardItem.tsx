import Emoji from "react-emoji-render";
import * as React from "react";
import ReactMarkdown from "react-markdown";
function RewardItem(props: any) {
    return (
        <div className="habit-item" id={props.id}>
            <div className="habit-button-grp">
                <button className="habit-button" id={props.id} onClick={props.onChange}>-{props.reward_value}</button>
            </div>
            <div>
            <p className="habit-text"><Emoji text={props.reward_text}></Emoji></p>
            <ReactMarkdown className="description" children={props.reward_notes} />
            </div>
            
        </div>
    )
}

export default RewardItem