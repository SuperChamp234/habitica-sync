import * as React from "react";
import { getTasks } from "./habiticaAPI"
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
            tasks: ""
        }
    }
    componentDidMount() {
        getTasks(username, credentials)
            .then(res => res.json())
            .then(
                result => {
                    this.setState({
                        isLoaded: true,
                        tasks: result.data
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
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            const listItems = tasks.map((tasks: any) =>
                <TodoItem key={tasks.id} task={tasks}/>
                
            );
            return (
                <ul>{listItems}</ul>
            );
        }
    }
}
export default App