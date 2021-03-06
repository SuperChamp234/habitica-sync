import * as React from "react";
import RewardItem from "./RewardItem"

export default function Index(props: any){
    if(props.rewards == undefined) {
        return (<div id="classDisplay">
                    No Rewards present.
                </div>)
    }
    else {
        const allRewards = props.rewards.map((reward: any) => {
            if (props.settings.showTaskDescription) {
                return <RewardItem key={reward.id} id={reward.id} reward_text={reward.text} reward_notes={reward.notes} reward_value={reward.value} onChange={props.onChange}/>
            } else {
                return <RewardItem key={reward.id} id={reward.id} reward_text={reward.text} reward_value={reward.value} onChange={props.onChange}/>
            }
        })
        const display = <div id="classDisplay">
                            <ul>{allRewards}</ul>
                        </div>

        return(display);
    }
}

