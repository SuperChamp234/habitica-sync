import * as React from "react";
import Dailiesview from "./Dailiesview"
import Habitsview from "./Habitsview"
import Todoview from "./Todoview"
import Rewardview from "./Rewardview"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

export default function Index(props: any){
    const display = <div className="task-view">
                    <Tabs>
                        <TabList>

                            <Tab>
                                <span className="material-icons md-24">today</span>
                            </Tab>
                            <Tab >
                                <span className="material-icons md-24">add_chart</span>
                            </Tab>
                            <Tab>
                                <span className="material-icons md-24">assignment_turned_in</span>
                            </Tab>
                            <Tab>
                                <span className="material-icons md-24">account_balance</span>
                            </Tab>
                        </TabList>
                        <TabPanel>
                            <Dailiesview dailys={props.data.dailys} settings = {props.settings} onChange={props.handleChangeDailys} />
                        </TabPanel>
                        <TabPanel>
                            <Habitsview habits={props.data.habits} settings = {props.settings} onChange={props.handleChangeHabits}/>
                        </TabPanel>
                        <TabPanel>
                        <Todoview todos={props.data.todos} settings = {props.settings} onChange={props.handleChangeTodos} />
                        </TabPanel>
                        <TabPanel>
                        <Rewardview rewards={props.data.rewards} settings = {props.settings} onChange={props.handleChangeRewards} />
                        </TabPanel>
                    </Tabs>
                </div>
    return(display);
}                 

