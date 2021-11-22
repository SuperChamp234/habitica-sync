import * as React from "react";
import DailyItem from "./DailyItem"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useTranslation, Trans, Translation } from 'react-i18next'

export default function Index(props: any){
    if(props.dailys == undefined) {
        return <div id="classDisplay"><Trans>No Dailies Present</Trans></div>
    }
    else {
        const incompleteDailies = props.dailys.map((daily: any) => {
                if(!daily.completed)
                    return <DailyItem key={daily.id} id={daily.id} daily_text={daily.text} daily_notes={daily.notes} onChange={props.onChange} completed={daily.completed}/>
        })
        const completedDailies = props.dailys.map((daily: any) => {
            if(daily.completed)
                return <DailyItem key={daily.id} id={daily.id} daily_text={daily.text} daily_notes={daily.notes} onChange={props.onChange} completed={daily.completed}/>
        })
        const display = <div id="classDisplay">
                            <Tabs>
                            <TabList>
                                <Tab><Trans>Active</Trans></Tab>
                                <Tab><Trans>Completed</Trans></Tab>
                            </TabList>
                            <div className="add-task-input">
                                <input type="text">
                                </input>
                                <button className="submit-button"><Trans>submit</Trans></button>
                            </div>
                            <TabPanel>
                                <ul>{incompleteDailies}</ul>
                            </TabPanel>
                            <TabPanel>
                                <ul>{completedDailies}</ul>
                            </TabPanel>
                            </Tabs>
                            
                        </div>
        return(display);
    }
        
}

