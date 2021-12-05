import * as React from "react";
import TodoItem from "./TodoItem"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Trans, useTranslation } from 'react-i18next'

export default function Index(props: any) {
    const [title, setTitle] = React.useState('')
    let { t, i18n } = useTranslation()
    if (props.todos == undefined) {
        return <div id="classDisplay">
            <div className="task-submit">
                <input className="task-input-box" type="text" placeholder={t('Add Todo')} onChange={event => setTitle(event.target.value)} value={title} />
                <button className="submit-button" id="add-todo" onClick={function (e) { setTitle(""); props.onChange(e) }} name={title}><Trans>submit</Trans></button>
            </div>
            <Trans>No Todos present.</Trans>
        </div>
    }
    else {
        const incompleteTodos = props.todos.map((todo: any) => {
            if (!todo.completed)
                return <TodoItem key={todo.id} id={todo.id} todo_text={todo.text} todo_notes={todo.notes} onChange={props.onChange} completed={todo.completed} />
        })
        const completedTodos = props.todos.map((todo: any) => {
            if (todo.completed)
                return <TodoItem key={todo.id} id={todo.id} todo_text={todo.text} todo_notes={todo.notes} onChange={props.onChange} completed={todo.completed} />
        })
        const display = <div id="classDisplay">
            <Tabs>
                <TabList>
                    <Tab><Trans>Active</Trans></Tab>
                    <Tab><Trans>Completed</Trans></Tab>
                </TabList>
                <TabPanel>
                    <div className="task-submit">
                        <input className="task-input-box" type="text" placeholder={t('Add Todo')} onChange={event => setTitle(event.target.value)} value={title} />
                        <button className="submit-button" id="add-todo" onClick={function (e) { setTitle(""); props.onChange(e) }} name={title}><Trans>submit</Trans></button>
                    </div>
                    <div className="task-panel">
                        <ul>{incompleteTodos}</ul>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="task-submit">
                        <input className="task-input-box" type="text" placeholder={t('Add Todo')} onChange={event => setTitle(event.target.value)} value={title} />
                        <button className="submit-button" id="add-todo" onClick={function (e) { setTitle(""); props.onChange(e) }} name={title}><Trans>submit</Trans></button>
                    </div>
                    <div className="task-panel">
                        <ul>{completedTodos}</ul>
                    </div>
                </TabPanel>
            </Tabs>
        </div>
        return (display);
    }
}