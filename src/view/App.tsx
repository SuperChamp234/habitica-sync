import * as React from "react";
import { Notice } from "obsidian";
import { getStats, scoreTask } from "./habiticaAPI"
import Statsview from "./Components/Statsview"
import Taskview from "./Components/Taskview"

let username = ""
let credentials = ""

class App extends React.Component<any,any> {
    constructor(props: any) {
        super(props)
        username = this.props.plugin.settings.userID
        credentials = this.props.plugin.settings.apiToken
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
            todos: [],
            dailys: [],
            habits: [],
        }
        this.handleChangeTodos = this.handleChangeTodos.bind(this)
        this.handleChangeDailys = this.handleChangeDailys.bind(this)
        this.handleChangeHabits = this.handleChangeHabits.bind(this)


    } 
    sendNotice(message: string){
        new Notice(message)
    }
    reloadData() {
        getStats(username, credentials)
            .then(res => res.json())
            .then(
                result => {
                    if(result.success === false){
                        this.sendNotice("Login Failed, Please check credentials and try again!")
                    } else {
                        this.setState({
                            isLoaded: true,
                            user_data: result,
                            tasks: result.tasks,
                        })
                    }
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
    handleChangeTodos(event: any){
        this.state.tasks.todos.forEach((element: any) => {
            if(element.id == event.target.id){
                if(!element.completed){
                    scoreTask(username, credentials, event.target.id, "up")
                        .then(res => res.json())
                        .then(
                            result => {
                                if(result.success) {
                                    this.sendNotice("Checked!")
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
    handleChangeDailys(event: any){
        this.state.tasks.dailys.forEach((element: any) => {
            if(element.id == event.target.id){
                if(!element.completed){
                    scoreTask(username, credentials, event.target.id, "up")
                        .then(res => res.json())
                        .then(
                            result => {
                                if(result.success) {
                                    this.sendNotice("Checked!")
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
    handleChangeHabits(event: any){
        const target_id = event.target.id.slice(4)
        if(event.target.id.slice(0,4) == "plus"){
            this.state.tasks.habits.forEach((element: any) => {
                if(element.id == target_id){
                    scoreTask(username, credentials, target_id, "up")
                        .then(res => res.json())
                        .then(
                            result => {
                                if(result.success) {
                                    this.sendNotice("Plus!")
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
            })
        }
        else {
            this.state.tasks.habits.forEach((element: any) => {
                if(element.id == target_id){
                    scoreTask(username, credentials, target_id, "down")
                        .then(res => res.json())
                        .then(
                            result => {
                                if(result.success) {
                                    this.sendNotice("Minus :(")
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
            })
        }
    }

    render(){
        if(this.state.error)
            return(<div className="loading">Loading....</div>)
        else if(!this.state.isLoaded)
            return <div className="loading">Loading....</div>
        else {
            return (<div className="plugin-root">
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
                <Statsview user_data={this.state.user_data} />
                <Taskview data={this.state.tasks} handleChangeTodos={this.handleChangeTodos} handleChangeDailys={this.handleChangeDailys} handleChangeHabits={this.handleChangeHabits}/>
                </div>
            );
        }
    }
}
export default App