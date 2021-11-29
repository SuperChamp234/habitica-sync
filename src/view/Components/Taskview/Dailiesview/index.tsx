import * as React from "react";
import DailyItem from "./DailyItem"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Trans, useTranslation } from 'react-i18next';

export default function Index(props: any) {
    const [title, setTitle] = React.useState('')
    let { t, i18n } = useTranslation()
    if (props.dailys == undefined) {
        return <div id="classDisplay">
            <div className="task-submit">
                <input className="task-input-box" type="text" placeholder={t('Add Daily Task')} onChange={event => setTitle(event.target.value)} value={title} />
                <button className="submit-button" id="add-daily" onClick={function (e) { setTitle(""); props.onChange(e) }} name={title}><Trans>submit</Trans></button>
            </div>
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
                    <div className="task-submit">
                        <input className="task-input-box" type="text" placeholder={t('Add Daily Task')} onChange={event => setTitle(event.target.value)} value={title} />
                        <button className="submit-button" id="add-daily" onClick={function (e) { setTitle(""); props.onChange(e) }} name={title}><Trans>submit</Trans></button>
                    </div>
                    <div className="task-panel">
                        <ul>{incompleteDailies}</ul>
                    </div>
                </TabPanel>
                <TabPanel>
                    <ul>{completedDailies}</ul>
                </TabPanel>
            </Tabs>

        </div>
        return (display);
    }

}

