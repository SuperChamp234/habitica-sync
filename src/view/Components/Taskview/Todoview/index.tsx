import * as React from "react";
import TodoItem from "./TodoItem"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

export default function Index(props: any){
    if(props.todos == undefined) {
        return <div id="classDisplay">No Todos present.</div>
    }
    else {
        const incompleteTodos = props.todos.map((todo: any) => {
                if(!todo.completed)
                    return <TodoItem key={todo.id} id={todo.id} todo_text={todo.text} onChange={props.onChange} completed={todo.completed}/>
        })
        const completedTodos = props.todos.map((todo: any) => {
            if(todo.completed)
                return <TodoItem key={todo.id} id={todo.id} todo_text={todo.text} onChange={props.onChange} completed={todo.completed}/>
        })
        const display = <div id="classDisplay">
                            <Tabs>
                            <TabList>
                                <Tab>Active</Tab>
                                <Tab>Completed</Tab>
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