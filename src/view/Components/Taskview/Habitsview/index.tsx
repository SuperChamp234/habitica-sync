import * as React from "react";
import HabitItem from "./HabitItem"
import { useTranslation, Trans, Translation } from 'react-i18next'

export default function Index(props: any){
    const [title, setTitle] = React.useState('')
    let { t ,i18n} = useTranslation()
    if(props.habits == undefined) {
        return (<div id="classDisplay">
                    <input type="text" placeholder={t('Add Habit')} onChange={event => setTitle(event.target.value)} />
                    <button className="submit-button" id="add-habit" onClick={props.onChange} name={title}><Trans>submit</Trans></button>
                    <Trans>No habits present.</Trans>
                </div>)
    }
    else {
        const allHabits = props.habits.map((habit: any) => {
            return <HabitItem key={habit.id} id={habit.id} habit_text={habit.text} habit_notes={habit.notes} upCount={habit.counterUp} downCount={habit.counterDown} onChange={props.onChange}/>
        })
        

        const display = <div id="classDisplay">
                            <input type="text" placeholder={t('Add Habit')} onChange={event => setTitle(event.target.value)} />
                            <button className="submit-button" id="add-habit" onClick={props.onChange} name={title}><Trans>submit</Trans></button>
                            <ul>{allHabits}</ul>
                        </div>

        return(display);
    }
}

