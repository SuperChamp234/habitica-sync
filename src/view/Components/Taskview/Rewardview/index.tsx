import * as React from "react";
import RewardItem from "./RewardItem"
import { useTranslation, Trans, Translation } from 'react-i18next'
import AddTask from "../AddTask";

export default function Index(props: any){
    if(props.rewards == undefined) {
        return (<div id="classDisplay">
                    <Trans>No Rewards present.</Trans>
                </div>)
    }
    else {
        const allRewards = props.rewards.map((reward: any) => {
            return <RewardItem key={reward.id} id={reward.id} reward_text={reward.text} reward_notes={reward.notes} reward_value={reward.value} onChange={props.onChange}/>
        })
        const display = <div id="classDisplay">
                        <AddTask type="reward"></AddTask>
                            <ul>{allRewards}</ul>
                        </div>

        return(display);
    }
}

