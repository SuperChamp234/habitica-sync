import * as React from "react";
import { Notice } from "obsidian";
import { getStats, scoreTask, makeCronReq } from "./habiticaAPI"
import Statsview from "./Components/Statsview"
import Taskview from "./Components/Taskview"

class App extends React.Component<any,any> {
    username = ""
    credentials = ""
    constructor(props: any) {
        super(props)
        this.username = this.props.plugin.settings.userID
        this.credentials = this.props.plugin.settings.apiToken
        this.state = {
            needCron: false,
            isLoaded: false,
            user_data: {
                profile: {
                    name: "",
                },
                stats: {
                    hp: 0,
                    lvl: 0,
                },
                lastCron: "",
            },
            todos: [],
            dailys: [],
            habits: [],
        }
        this.handleChangeTodos = this.handleChangeTodos.bind(this)
        this.handleChangeDailys = this.handleChangeDailys.bind(this)
        this.handleChangeHabits = this.handleChangeHabits.bind(this)


    }
    CheckCron(props: any) {
        let cronDate = new Date(props.lastCron).getTime();
        let now = new Date().getTime();
        if (now > cronDate + 86400000) {
            return(
                <div className="cron">
                    <div id="cronMessage"> Welcome back! Please check your tasks for the last day and hit continue to get your daily rewards. </div>
                    <button onClick={() => {this.runCron()}}>Continue</button>
                </div>
            );
        }
        else {
            console.log("Cron is up to date");
            return null
        };
    }
    runCron() {
        makeCronReq(this.username, this.credentials)
        .then(res => {
            this.setState({
                needCron: false
            })
        });
        this.reloadData();
    }    
    async reloadData() {
        try {
			let response = await getStats(this.username, this.credentials);
			let result = await response.json();
			if (result.success === false) {
				new Notice('Login Failed, Please check credentials and try again!');
			}
			else {
                console.log(result);
				this.setState({
					isLoaded: true,
					user_data: result,
					tasks: result.tasks,
				});
			}
		} catch (e) {
            console.log(e);
            new Notice("API Error: Please check credentials")
		}
    }
    componentDidMount() {
        this.reloadData()
    }
    
    async sendScore(id:string , score: string, message: string){
        try {
			let response = await scoreTask(this.username, this.credentials, id, score);
			let result = await response.json();
			if(result.success === true){
                new Notice(message);
                this.reloadData();
            } else {
                new Notice("Resyncing, please try again");
                this.reloadData();
            }
		} catch (e) {
            console.log(e);
            new Notice("API Error: Please check credentials")
		}
    }

    handleChangeTodos(event: any){
        this.state.tasks.todos.forEach((element: any) => {
            if(element.id == event.target.id){
                if(!element.completed){
                    this.sendScore(event.target.id,"up", "Checked!")
                } else {
                    this.sendScore(event.target.id,"down", "Un-Checked!")
                }
            }
        })
    }
    handleChangeDailys(event: any){
        this.state.tasks.dailys.forEach((element: any) => {
            if(element.id == event.target.id){
                if(element.id == event.target.id){
                    if(!element.completed){
                        this.sendScore(event.target.id,"up", "Checked!")
                    } else {
                        this.sendScore(event.target.id,"down", "Un-Checked!")
                    }
                }
            }
        })
    }
    handleChangeHabits(event: any){
        const target_id = event.target.id.slice(4)
        if(event.target.id.slice(0,4) == "plus"){
            this.state.tasks.habits.forEach((element: any) => {
                if(element.id == target_id){
                    this.sendScore(target_id,"up", "Plus!")
                }
            })
        }
        else {
            this.state.tasks.habits.forEach((element: any) => {
                if(element.id == target_id){
                    this.sendScore(target_id,"down", "Minus :(")
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
                <this.CheckCron lastCron={this.state.user_data.lastCron}/>
                </div>
            );
        }
    }
}
export default App