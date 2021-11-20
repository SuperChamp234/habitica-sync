import Emoji from "react-emoji-render";
import * as React from "react";

function RewardItem(props: any) {
    return (
        <div className="reward-item" id={props.id}>
            <button className="reward-click" id={props.id} onClick={props.onChange}>-{props.reward_value}</button>
            <p className="reward-text"><Emoji text={props.reward_text}></Emoji></p>
        </div>
    )
}

export default RewardItem