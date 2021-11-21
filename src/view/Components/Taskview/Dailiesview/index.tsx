import * as React from "react";
import DailyItem from "./DailyItem"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

export default function Index(props: any){
    if(props.dailys == undefined) {
        return <div id="classDisplay">No Dailies Present</div>
    }
    else {
        const incompleteDailies = props.dailys.map((daily: any) => {
                if(!daily.completed)
                    if (props.settings.showTaskDescription) {
                    return <DailyItem key={daily.id} id={daily.id} daily_text={daily.text} daily_notes={daily.notes} onChange={props.onChange} completed={daily.completed}/>
                    } else {
                        return <DailyItem key={daily.id} id={daily.id} daily_text={daily.text} onChange={props.onChange} completed={daily.completed}/>
                    }
                })
        const completedDailies = props.dailys.map((daily: any) => {
            if(daily.completed)
                return <DailyItem key={daily.id} id={daily.id} daily_text={daily.text} daily_notes={daily.notes} onChange={props.onChange} completed={daily.completed}/>
        })
        const display = <div id="classDisplay">
                            <Tabs>
                            <TabList>
                                <Tab>Active</Tab>
                                <Tab>Completed</Tab>
                            </TabList>
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

