import * as React from "react";
import { getTasks, getStats } from "./habiticaAPI"
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
            tasks: []    //gave an error if the the tasks thing was string so better keep it an array for .map to work :)
        }
    }
    componentDidMount() {
        // getTasks(username, credentials)
        //     .then(res => res.json())
        //     .then(
        //         result => {
        //             this.setState({
        //                 isLoaded: true,
        //                 tasks: result.data
        //             })
        //         },
        //         (error) => {
        //             this.setState({
        //                 isLoaded: true,
        //                 error
        //             })
        //         }
        //     )
        
        getStats(username, credentials)
            .then(res => res.json())
            .then(
                result => {
                    console.log(result) //yup this prints out correctly! since the promise is handled by .then
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
    render(){
        const { error, isLoaded, tasks } = this.state;
        const user_data = this.state.user_data
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            const listItems = tasks.map((tasks: any) =>
            <div>
                <TodoItem key={tasks.id} task={tasks}/>
            </div>
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