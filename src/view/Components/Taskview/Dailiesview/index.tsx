import * as React from "react";
import DailyItem from "./DailyItem"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Trans } from 'react-i18next';

export default function Index(props: any) {
    const [title, setTitle] = React.useState('')
    if (props.dailys == undefined) {
        return <div id="classDisplay">
            <input type="text" placeholder="添加每日任务" onChange={event => setTitle(event.target.value)} />
            <button className="submit-button" id="add-daily" onClick={props.onChange} name={title}><Trans>submit</Trans></button>
            <Trans>No Dailies Present</Trans>
            </div>
    }
    else {
        const incompleteDailies = props.dailys.map((daily: any) => {
            if (!daily.completed)
                return (
                    <DailyItem key={daily.id} id={daily.id} daily_text={daily.text} daily_notes={daily.notes} onChange={props.onChange} completed={daily.completed} />
                )
        })
        const completedDailies = props.dailys.map((daily: any) => {
            if (daily.completed)
                return <DailyItem key={daily.id} id={daily.id} daily_text={daily.text} daily_notes={daily.notes} onChange={props.onChange} completed={daily.completed} />
        })
        

        const display = <div id="classDisplay">
            <Tabs>
                <TabList>
                    <Tab><Trans>Active</Trans></Tab>
                    <Tab><Trans>Completed</Trans></Tab>
                </TabList>
                <TabPanel>
                    <input type="text" placeholder="添加每日任务" onChange={event => setTitle(event.target.value)} />
                    <button className="submit-button" id="add-daily" onClick={props.onChange} name={title}><Trans>submit</Trans></button>
                    <ul>{incompleteDailies}</ul>
                </TabPanel>
                <TabPanel>
                    <ul>{completedDailies}</ul>
                </TabPanel>
            </Tabs>

        </div>
        return (display);
    }

}

