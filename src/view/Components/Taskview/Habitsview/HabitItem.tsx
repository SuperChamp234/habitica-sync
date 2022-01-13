import Emoji from "react-emoji-render";
import * as React from "react";
import ReactMarkdown from "react-markdown";

function HabitItem(props: any) {
    return (
        <div className="habit-item" id={props.id}>
            <div className="habit-button-grp">
                <button className="habit-button" id={"plus" + props.id} onClick={props.onChange}>
                    +{props.upCount}
                </button>
                <button className="habit-button" id={"mins" + props.id} onClick={props.onChange}>
                    -{props.downCount}
                </button>
            </div>
            <div>
                <p className="habit-text"><Emoji text={props.habit_text}></Emoji></p>
                <ReactMarkdown className="description" children={props.habit_notes} />
            </div>
        </div>
    )
}

export default HabitItem