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
            return <RewardItem key={reward.id} id={reward.id} reward_text={reward.text} reward_value={reward.value} onChange={props.onChange}/>
        })
        const display = <div id="classDisplay">
                            <ul>{allRewards}</ul>
                        </div>

        return(display);
    }
}

