import * as React from "react";
import TodoItem from "./TodoItem"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useTranslation, Trans, Translation } from 'react-i18next'

export default function Index(props: any){
    if(props.todos == undefined) {
        return <div id="classDisplay">No Todos present.</div>
    }
    else {
        const incompleteTodos = props.todos.map((todo: any) => {
                if(!todo.completed)
                    return <TodoItem key={todo.id} id={todo.id} todo_text={todo.text} todo_notes={todo.notes} onChange={props.onChange} completed={todo.completed}/>
        })
        const completedTodos = props.todos.map((todo: any) => {
            if(todo.completed)
                return <TodoItem key={todo.id} id={todo.id} todo_text={todo.text} todo_notes={todo.notes} onChange={props.onChange} completed={todo.completed}/>
        })
        const display = <div id="classDisplay">
                            <Tabs>
                            <TabList>
                                <Tab><Trans>Active</Trans></Tab>
                                <Tab><Trans>Completed</Trans></Tab>
                            </TabList>
                            <TabPanel>
                                <ul>{incompleteTodos}</ul>
                            </TabPanel>
                            <TabPanel>
                                <ul>{completedTodos}</ul>
                            </TabPanel>
                            </Tabs>
                        </div>
                        

        return(display);
    }
}