import * as React from "react";
import renderMarkdown from "../markdownRender";

function RewardItem(props: any) {
    let reward_text = renderMarkdown(props.reward_text);
    let reward_notes = renderMarkdown(props.reward_notes);
    return (
        <div className="habit-item" id={props.id}>
            <div className="habit-button-grp">
                <button className="habit-button" id={props.id} onClick={props.onChange}>-{props.reward_value}</button>
            </div>
            <div>
            <p className="habit-text"><span dangerouslySetInnerHTML={{__html: reward_text}}></span></p>
            <div className="description" dangerouslySetInnerHTML={{__html: reward_notes}}></div>
            </div>
            
        </div>
    )
}

export default RewardItem