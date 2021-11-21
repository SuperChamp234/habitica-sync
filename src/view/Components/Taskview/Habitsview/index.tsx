import * as React from "react";
import HabitItem from "./HabitItem"

export default function Index(props: any){
    if(props.habits == undefined) {
        return (<div id="classDisplay">
                    No habits present.
                </div>)
    }
    else {
        const allHabits = props.habits.map((habit: any) => {
            if (props.settings.showTaskDescription) {
            return <HabitItem key={habit.id} id={habit.id} habit_text={habit.text} habit_notes={habit.notes} upCount={habit.counterUp} downCount={habit.counterDown} onChange={props.onChange}/>
            } else {
                return <HabitItem key={habit.id} id={habit.id} habit_text={habit.text} upCount={habit.counterUp} downCount={habit.counterDown} onChange={props.onChange}/>
            }
        })
        const display = <div id="classDisplay">
                            <ul>{allHabits}</ul>
                        </div>

        return(display);
    }
}

