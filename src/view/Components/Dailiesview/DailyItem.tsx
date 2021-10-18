 import * as React from "react";

function DailyItem(props: any) {
    console.log(props);
    return (
        <div className="todo-item" id={props.id}>
            <input type="checkbox" className="checkbox" id={props.id} onChange={props.onChange} checked={props.completed}/>
            <p>{props.daily_text}</p>
        </div>
    )
}

export default DailyItem