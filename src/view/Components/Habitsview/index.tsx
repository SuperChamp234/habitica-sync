import * as React from "react";
import HabitItem from "./HabitItem"

export default function Index(props: any){
    console.log("habits = " + props.habits);
    const allHabits = props.habits.map((habit: any) => {
        return <HabitItem key={habit.id} id={habit.id}habit_text={habit.text} onChange={props.onChange}/>
    })
    const display = <div id="classDisplay">
                        <ul>{allHabits}</ul>
                    </div>

    return(display);
}

