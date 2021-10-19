import * as React from "react";
import HabitItem from "./HabitItem"

export default function Index(props: any){
    if(props.habits == undefined) {
        return (<div id="classDisplay">
                    No habits present.
                </div>)
    }
    else {
        console.log("habits = " + props.habits);
        const allHabits = props.habits.map((habit: any) => {
            return <HabitItem key={habit.id} id={habit.id} habit_text={habit.text} upCount={habit.counterUp} downCount={habit.counterDown} onChange={props.onChange}/>
        })
        const display = <div id="classDisplay">
                            <ul>{allHabits}</ul>
                        </div>

        return(display);
    }
}

