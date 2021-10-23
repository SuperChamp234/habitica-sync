 import * as React from "react";

function HabitItem(props: any) {
    return (
        <div className="habit-item" id={props.id}>
            <button className="habit-plus" id={"plus"+props.id} onClick={props.onChange}>
                +{props.upCount}
            </button>
            <p className="habit-text">{props.habit_text}</p>
            <button className="habit-minus" id={"mins"+props.id} onClick={props.onChange}>
                -{props.downCount}
            </button>
        </div>
    )
}

export default HabitItem