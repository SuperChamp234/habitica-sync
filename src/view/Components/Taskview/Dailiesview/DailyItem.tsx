import Emoji from "react-emoji-render";
import * as React from "react";

function DailyItem(props: any) {
    return (
        <div className="todo-item" id={props.id}>
            <input type="checkbox" className="checkbox" id={props.id} onChange={props.onChange} checked={props.completed}/>
            <p><Emoji text={props.daily_text}></Emoji></p>
        </div>
    )
}

export default DailyItem