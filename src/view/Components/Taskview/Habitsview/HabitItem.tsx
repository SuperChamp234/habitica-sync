import * as React from "react";
import renderMarkdown from "../markdownRender";

function HabitItem(props: any) {
    let habit_text = renderMarkdown(props.habit_text);
    let habit_notes = renderMarkdown(props.habit_notes);
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
                <p className="habit-text"><span dangerouslySetInnerHTML={{__html: habit_text}}></span></p>
                <div className="description" dangerouslySetInnerHTML={{__html: habit_notes}}></div>
            </div>
        </div>
    )
}

export default HabitItem