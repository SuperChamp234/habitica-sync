 import * as React from "react";

function HabitItem(props: any) {
    console.log(props);
    return (
        <div className="habit-item" id={props.id}>
            <button className="habit-plus" onClick={() => this.handleClick()}>
                +
            </button>
            <p>{props.habit_text}</p>
            <button className="habit-minus" onClick={() => this.handleClick()}>
                -
            </button>
        </div>
    )
}

export default HabitItem