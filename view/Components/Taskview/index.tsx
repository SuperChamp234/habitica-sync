import * as React from "react";
import TodoItem from "./TodoItem"

export default function Index(props: any){
    const listItems = props.todos.map((todo: any) => {
            return <TodoItem key={todo.id} id={todo.id} todo_text={todo.text} onChange={props.onChange} completed={todo.completed}/>
    })
    return(<ul>{listItems}</ul>);
}