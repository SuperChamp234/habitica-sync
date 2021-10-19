import * as React from "react";
import Dailiesview from "./Dailiesview"
import Habitsview from "./Habitsview"
import Todoview from "./Todoview"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

export default function Index(props: any){
    const display = <div id="classDisplay">
                    <Tabs>
                    <TabList>
                        <Tab>
                            <span className="material-icons md-24">task_alt</span>
                        </Tab>
                        <Tab>
                            <span className="material-icons">today</span>
                        </Tab>
                        <Tab>
                            <span className="material-icons">add_circle_outline</span>
                        </Tab>
                    </TabList>
                    <TabPanel>
                        <Habitsview habits={props.data.habits} onChange={props.handleChangeHabits}/>
                    </TabPanel>
                    <TabPanel>
                        <Dailiesview dailys={props.data.dailys} onChange={props.handleChangeDailys} />
                    </TabPanel>
                    <TabPanel>
                    <Todoview todos={props.data.todos} onChange={props.handleChangeTodos} />
                    </TabPanel>
                    </Tabs>
                </div>
    return(display);
}                 

