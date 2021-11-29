import * as React from "react";
import RewardItem from "./RewardItem"
import { Trans, useTranslation } from 'react-i18next'

export default function Index(props: any) {
    const [title, setTitle] = React.useState('')
    let { t, i18n } = useTranslation()
    if (props.rewards == undefined) {
        return (<div id="classDisplay">
            <div className="task-submit">
                <input className="task-input-box" type="text" placeholder={t('Add Reward')} onChange={event => setTitle(event.target.value)} value={title} />
                <button className="submit-button" id="add-reward" onClick={function (e) { setTitle(""); props.onChange(e) }} name={title}><Trans>submit</Trans></button>
            </div>
            <Trans>No Rewards present.</Trans>
        </div>)
    }
    else {
        const allRewards = props.rewards.map((reward: any) => {
            return <RewardItem key={reward.id} id={reward.id} reward_text={reward.text} reward_notes={reward.notes} reward_value={reward.value} onChange={props.onChange} />
        })
        const display = <div id="classDisplay">
            <div className="task-submit">
                <input className="task-input-box" type="text" placeholder={t('Add Reward')} onChange={event => setTitle(event.target.value)} value={title} />
                <button className="submit-button" id="add-reward" onClick={function (e) { setTitle(""); props.onChange(e) }} name={title}><Trans>submit</Trans></button>
            </div>
            <ul>{allRewards}</ul>
        </div>

        return (display);
    }
}

