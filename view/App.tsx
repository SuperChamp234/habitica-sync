import * as React from "react";
import { getTasks } from "./habiticaAPI"
import TodoItem from "./TodoItem"


const username = "5b70c4ea-ed91-4fc4-8231-edd1984ec02c"
const credentials = "ccbeec3b-fe55-4952-a2fa-023d0fbbab85"

class App extends React.Component<any,any> {
    constructor(props: any) {
        super(props)
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
                    console.log(result.data)
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