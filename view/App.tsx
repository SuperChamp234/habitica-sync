import * as React from "react";
import { getStats, scoreTask } from "./habiticaAPI"
import Statsview from "./Components/Statsview"
import Taskview from "./Components/Taskview"

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
            todos: []
        }
        this.handleChange = this.handleChange.bind(this)
    }
    sendNotice(message: string){
        this.props.plugin.displayNotice(message)
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
                        todos: result.tasks.todos
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
        this.state.todos.forEach((element: any) => {
            if(element.id == event.target.id){
                if(!element.completed){
                    scoreTask(username, credentials, event.target.id, "up")
                        .then(res => res.json())
                        .then(
                            result => {
                                if(result.success) {
                                    this.sendNotice("Checked!")
                                    console.log(result)
                                    this.reloadData()
                                } else {
                                    this.sendNotice("Resyncing, please try again")
                                    this.reloadData()
                                }
                            },
                            (error) => {
                                this.sendNotice("API Error: Please Check crendentials and try again")
                                console.log(error)
                            }
                        )
                } else {
                    scoreTask(username, credentials, event.target.id, "down")
                        .then(res => res.json())
                        .then(
                            result => {
                                if(result.success){
                                    this.sendNotice("Un-checked!")
                                    console.log(result)
                                    this.reloadData()
                                } else {
                                    this.sendNotice("Resyncing, please try again")
                                    this.reloadData()
                                }
                            },
                            (error) => {
                                this.sendNotice("API Error: Please Check crendentials and try again")
                                console.log(error)
                            }
                        )
                }
            }
        })
    }

    render(){
        if(this.state.error)
            return(<div className="loading">Loading....</div>)
        else if(!this.state.isLoaded)
            return <div className="loading">Loading....</div>
        else {
            return (<div>
                <Statsview user_data={this.state.user_data} />
                <Taskview todos={this.state.todos} onChange={this.handleChange} />
                </div>
            );
        }
    }
}
export default App