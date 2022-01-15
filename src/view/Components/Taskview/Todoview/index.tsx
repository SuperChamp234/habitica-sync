import * as React from "react";
import TodoItem from "./TodoItem"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

export default function Index(props: any){
    if(props.todos == undefined) {
        return <div id="classDisplay">No Todos present.</div>
    }
    else {
        const incompleteTodos = props.todos.map((todo: any) => {

                if(!todo.completed) {
                    let todo_notes = '';
                    let todo_subtasks = '';
                    if (props.settings.showTaskDescription) {
                        todo_notes = todo.notes;
                    }

                    if (props.settings.showSubTasks) {
                        todo_subtasks = todo.checklist;
                    }
                    return <TodoItem key={todo.id} id={todo.id} todo_text={todo.text} 
                        todo_notes={todo_notes} todo_subtasks={todo_subtasks}
                        onChange={props.onChange} onChangeChecklistItem={props.onChangeChecklistItem} completed={todo.completed} dueDate={todo.date} dueDateFormat={props.settings.dueDateFormat}/>
                }
                    
        })
        const completedTodos = props.todos.map((todo: any) => {
            if(todo.completed)
                return <TodoItem key={todo.id} id={todo.id} todo_text={todo.text} todo_notes={todo.notes} onChange={props.onChange} completed={todo.completed}/>
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