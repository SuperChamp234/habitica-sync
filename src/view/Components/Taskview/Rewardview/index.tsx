import * as React from "react";
import RewardItem from "./RewardItem"
import { Trans } from 'react-i18next'

export default function Index(props: any){
    const [title, setTitle] = React.useState('')
    if(props.rewards == undefined) {
        return (<div id="classDisplay">
                    <input type="text" placeholder="添加奖励" onChange={event => setTitle(event.target.value)} />
                    <button className="submit-button" id="add-reward" onClick={props.onChange} name={title}><Trans>submit</Trans></button>
                    <Trans>No Rewards present.</Trans>
                </div>)
    }
    else {
        const allRewards = props.rewards.map((reward: any) => {
            return <RewardItem key={reward.id} id={reward.id} reward_text={reward.text} reward_notes={reward.notes} reward_value={reward.value} onChange={props.onChange}/>
        })
        const display = <div id="classDisplay">
                            <input type="text" placeholder="添加奖励" onChange={event => setTitle(event.target.value)} />
                            <button className="submit-button" id="add-reward" onClick={props.onChange} name={title}><Trans>submit</Trans></button>
                            <ul>{allRewards}</ul>
                        </div>

        return(display);
    }
}

