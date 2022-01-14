import * as React from "react";
import DailyItem from "./DailyItem"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

export default function Index(props: any){
    if(props.dailys == undefined) {
        return <div id="classDisplay">No Dailies Present</div>
    }
    else {
        const notDueDailies = props.dailys.map((daily: any) => {
            if (!daily.isDue) {
                let daily_notes = '';
                let daily_subtasks = '';
                if (props.settings.showTaskDescription) {
                    daily_notes = daily.notes;
                }

                if (props.settings.showSubTasks) {
                    daily_subtasks = daily.checklist;
                }
                return <DailyItem key={daily.id} id={daily.id} daily_text={daily.text} 
                    daily_notes={daily_notes} daily_subtasks={daily_subtasks}
                    onChange={props.onChange} completed={daily.completed} onChangeChecklistItem={props.onChangeChecklistItem}/>
            }
        })
        const incompleteDailies = props.dailys.map((daily: any) => {
                if (!daily.completed&&daily.isDue) {
                    let daily_notes = '';
                    let daily_subtasks = '';
                    if (props.settings.showTaskDescription) {
                        daily_notes = daily.notes;
                    }

                    if (props.settings.showSubTasks) {
                        daily_subtasks = daily.checklist;
                    }
                    return <DailyItem key={daily.id} id={daily.id} daily_text={daily.text} 
                        daily_notes={daily_notes} daily_subtasks={daily_subtasks}
                        onChange={props.onChange} completed={daily.completed} onChangeChecklistItem={props.onChangeChecklistItem}/>
                }
            })
        const completedDailies = props.dailys.map((daily: any) => {
            // if(daily.completed)
            //     return <DailyItem key={daily.id} id={daily.id} daily_text={daily.text} daily_notes={daily.notes} onChange={props.onChange} completed={daily.completed}/>
            if (!daily.completed) {
                let daily_notes = '';
                let daily_subtasks = '';
                if (props.settings.showTaskDescription) {
                    daily_notes = daily.notes;
                }

                if (props.settings.showSubTasks) {
                    daily_subtasks = daily.checklist;
                }
                return <DailyItem key={daily.id} id={daily.id} daily_text={daily.text} 
                    daily_notes={daily_notes} daily_subtasks={daily_subtasks}
                    onChange={props.onChange} completed={daily.completed} onChangeChecklistItem={props.onChangeChecklistItem}/>
            }
        })
        const display = <div id="classDisplay">
                            <Tabs>
                            <TabList>
                                <Tab>Active</Tab>
                                <Tab>Completed</Tab>
                                <Tab>Not Due</Tab>
                            </TabList>
                            <TabPanel>
                                <ul>{incompleteDailies}</ul>
                            </TabPanel>
                            <TabPanel>
                                <ul>{completedDailies}</ul>
                            </TabPanel>
                            <TabPanel>
                                <ul>{notDueDailies}</ul>
                            </TabPanel>
                            </Tabs>
                        </div>
        return(display);
    }
        
}

