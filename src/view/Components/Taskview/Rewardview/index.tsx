import * as React from "react";
import RewardItem from "./RewardItem"
import { useTranslation, Trans, Translation } from 'react-i18next'

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
                            <div className="add-task-input">
                                <input type="text">
                                </input>
                                <button className="submit-button"><Trans>submit</Trans></button>
                            </div>
                            <ul>{allRewards}</ul>
                        </div>

        return(display);
    }
}

