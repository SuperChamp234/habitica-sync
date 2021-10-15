import { Tasks } from "obsidian";
import * as React from "react";
import { getStats, scoreTask } from "./habiticaAPI"
import TodoItem from "./TodoItem"

let username = ""
let credentials = ""

class App extends React.Component<any,any> {
    constructor(props: any) {
        super(props)
        username = this.props.username
        credentials = this.props.apiToken
        this.state = {
            isLoaded: false,
            user_data: {
                profile: {
                    name: "",
                },
                stats: {
                    hp: 0,
                    lvl: 0,
                }
            },
            tasks: []
        }
        this.handleChange = this.handleChange.bind(this)
    }
    reloadData() {
        getStats(username, credentials)
            .then(res => res.json())
            .then(
                result => {
                    console.log(result)
                    console.log("data reloaded")
                    this.setState({
                        isLoaded: true,
                        user_data: result,
                        tasks: result.tasks.todos
                })
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                })
            }
            )
    }
    componentDidMount() {
        this.reloadData()
    }
    handleChange(event: any){
        this.state.tasks.forEach((element: any) => {
            if(element.id == event.target.id){
                if(!element.completed){
                    scoreTask(username, credentials, event.target.id, "up")
                        .then(res => res.json())
                        .then(
                            result => {
                                console.log("Checked!")
                                console.log(result)
                                this.reloadData()
                            }
                        )
                } else {
                    scoreTask(username, credentials, event.target.id, "down")
                        .then(res => res.json())
                        .then(
                            result => {
                                console.log("unchecked!")
                                console.log(result)
                                this.reloadData()
                            }
                        )
                }
            }
        })
    }

    render(){
        const { error, isLoaded, tasks } = this.state;
        const user_data = this.state.user_data
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            const listItems = tasks.map((tasks: any) =>
                <TodoItem  key={tasks.id} id={tasks.id} task={tasks} completed={tasks.completed} onChange={this.handleChange}/>
            );
            return (<div>
                <h3>{user_data.profile.name}</h3>{"\n"}
                <div>HP: {user_data.stats.hp}</div><div> XP: {user_data.stats.lvl}</div>{"\n"}
                <ul>{listItems}</ul>
                </div>
            );
        }
    }
}
export default App