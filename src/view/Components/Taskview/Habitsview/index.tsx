import * as React from "react";
import HabitItem from "./HabitItem"
import { useTranslation, Trans, Translation } from 'react-i18next'
import AddTask from "../AddTask";

export default function Index(props: any){
    if(props.habits == undefined) {
        return (<div id="classDisplay">
                    <Trans>No habits present.</Trans>
                </div>)
    }
    else {
        const allHabits = props.habits.map((habit: any) => {
            return <HabitItem key={habit.id} id={habit.id} habit_text={habit.text} habit_notes={habit.notes} upCount={habit.counterUp} downCount={habit.counterDown} onChange={props.onChange}/>
        })
        const display = <div id="classDisplay">
                        <AddTask type="habit"></AddTask>
                            <ul>{allHabits}</ul>
                        </div>

        return(display);
    }
}

