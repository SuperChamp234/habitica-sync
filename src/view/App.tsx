import * as React from "react";
import { Notice } from "obsidian";
import { getStats, scoreTask, makeCronReq, costReward, addTask, deleteTask, updateTask } from "./habiticaAPI"
import Statsview from "./Components/Statsview"
import Taskview from "./Components/Taskview"
import { Trans } from 'react-i18next';
import "src/i18n"
import i18next from "i18next";

class App extends React.Component<any, any> {
    private _username = "";
    public get username() {
        return this._username;
    }
    public set username(value) {
        this._username = value;
    }
    private _credentials = "";
    public get credentials() {
        return this._credentials;
    }
    public set credentials(value) {
        this._credentials = value;
    }
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
        this.handleChangeTodos = this.handleChangeTodos.bind(this);
        this.handleChangeDailys = this.handleChangeDailys.bind(this);
        this.handleChangeHabits = this.handleChangeHabits.bind(this);
        this.handleChangeRewards = this.handleChangeRewards.bind(this);
        this.runCron = this.runCron.bind(this);

    }
    CheckCron(lastCron: string) {
        let cronDate = new Date(lastCron);
        let now = new Date();
        if (cronDate.getDate() != now.getDate() || (cronDate.getMonth() != now.getMonth() || cronDate.getFullYear() != now.getFullYear())) {
            return (
                <div className="cron">
                    <button onClick={this.runCron}>Refresh</button>
                </div>
            );
        }
        else {
            return <div className="cron"></div>
        };
    }
    async runCron() {
        console.log(i18next.t('running cron'));
        try {
            let response = await makeCronReq(this.username, this.credentials);
            this.setState({
                needCron: false,
            })
        } catch (error) {
            console.log(error);
            new Notice(i18next.t("There was an error running the cron. Please try again later."));
        }
        this.reloadData();
    }
    async reloadData() {
        try {
            let response = await getStats(this.username, this.credentials);
            let result = await response.json();
            if (result.success === false) {
                new Notice(i18next.t('Login Failed, Please check credentials and try again!'));
            }
            else {
                this.setState({
                    isLoaded: true,
                    user_data: result,
                    tasks: result.tasks,
                });
            }
        } catch (e) {
            console.log(e);
            new Notice(i18next.t('API Error: Please check credentials'))
        }
    }
    componentDidMount() {
        this.reloadData()
    }

    async sendScore(id: string, score: string, message: string) {
        try {
            let response = await scoreTask(this.username, this.credentials, id, score);
            let result = await response.json();
            if (result.success === true) {
                new Notice(message);
                this.reloadData();
            } else {
                new Notice(i18next.t('Resyncing, please try again'));
                this.reloadData();
            }
        } catch (e) {
            console.log(e);
            new Notice(i18next.t('API Error: Please check credentials'))
        }
    }

    async sendReward(id: string, score: string, message: string) {
        try {
            let response = await costReward(this.username, this.credentials, id, score);
            let result = await response.json();
            if (result.success === true) {
                new Notice(message);
                this.reloadData();
            } else {
                new Notice(i18next.t('Resyncing, please try again'));
                this.reloadData();
            }
        } catch (e) {
            console.log(e);
            new Notice(i18next.t('API Error: Please check credentials'))
        }
    }

    async sendAddTask(type: string, title: string, message: string) {
        try {
            let response = await addTask(this.username, this.credentials, title, type);
            let result = await response.json();
            if (result.success === true) {
                new Notice(message);
                this.reloadData();
            } else {
                new Notice(i18next.t('Resyncing, please try again'));
                this.reloadData();
            }
        } catch (e) {
            console.log(e);
            new Notice(i18next.t('API Error: Please check credentials'))
        }
    }

    async sendDeleteTask(id: string, message: string) {
        try {
            let response = await deleteTask(this.username, this.credentials, id);
            let result = await response.json();
            if (result.success === true) {
                new Notice(message);
                this.reloadData();
            } else {
                new Notice(i18next.t('Resyncing, please try again'));
                this.reloadData();
            }
        } catch (e) {
            console.log(e);
            new Notice(i18next.t('API Error: Please check credentials'))
        }
    }

    async sendUpdateTask(id: string, type: string, message: string, title: string, notes: string, coin: string = null) {
        try {
            let response = await updateTask(this.username, this.credentials, id, type, title, notes, coin);
            let result = await response.json();
            if (result.success === true) {
                new Notice(message);
                this.reloadData();
            } else {
                new Notice(i18next.t('Resyncing, please try again'));
                this.reloadData();
            }
        } catch (e) {
            console.log(e);
            new Notice(i18next.t('API Error: Please check credentials'))
        }
    }

    handleChangeTodos(event: any) {
        if (event.target.id == "add-todo") {
            const title = event.target.name
            this.sendAddTask("todo", title, i18next.t('Add!'))
        } else {
            this.state.tasks.todos.forEach((element: any) => {
                if (element.id == event.target.id) {
                    if (event.type == "click") {
                        if (event.target.innerText == 'clear') {
                            this.sendDeleteTask(event.target.id, i18next.t('Deleted!'))
                        } else if (event.target.attributes.title.value == 'submit') {
                            const task_title = event.target.attributes['data-title'].value ? event.target.attributes['data-title'].value : element.text
                            const task_notes = event.target.attributes['data-notes'].value ? event.target.attributes['data-notes'].value : element.notes
                            this.sendUpdateTask(event.target.id, 'todo', i18next.t("Update!"), task_title, task_notes)
                        }
                    } else {
                        if (!element.completed) {
                            this.sendScore(event.target.id, "up", i18next.t('Checked!'))
                        } else {
                            this.sendScore(event.target.id, "down", i18next.t('Un-Checked!'))
                        }
                    }
                }
            })
        }
    }


    handleChangeDailys(event: any) {
        if (event.target.id == "add-daily") {
            const title = event.target.name
            this.sendAddTask("daily", title, i18next.t('Add!'))
        } else {
            this.state.tasks.dailys.forEach((element: any) => {
                if (element.id == event.target.id) {
                    if (event.target.type == 'checkbox') {
                        if (!element.completed) {
                            this.sendScore(event.target.id, "up", i18next.t('Checked!'))
                        } else {
                            this.sendScore(event.target.id, "down", i18next.t('Un-Checked!'))
                        }
                    } else {
                        if (event.target.attributes.title.value == 'submit') {
                            const task_title = event.target.attributes['data-title'].value ? event.target.attributes['data-title'].value : element.text
                            const task_notes = event.target.attributes['data-notes'].value ? event.target.attributes['data-notes'].value : element.notes
                            this.sendUpdateTask(event.target.id, 'daily', i18next.t("Update!"), task_title, task_notes)
                        } else if (event.target.attributes.title.value == 'delete') {
                            this.sendDeleteTask(event.target.id, i18next.t('Deleted!'))
                        }
                    }
                }
            })
        }
    }

    handleChangeHabits(event: any) {
        if (event.target.id == "add-habit") {
            const title = event.target.name
            this.sendAddTask("habit", title, i18next.t('Add!'))
        } else if (event.target.innerText == 'clear') {
            this.sendDeleteTask(event.target.id, i18next.t('Deleted!'))
        } else {
            this.state.tasks.habits.forEach((element: any) => {
                if (event.target.attributes.title.value == 'submit') {
                    const task_title = event.target.attributes['data-title'].value ? event.target.attributes['data-title'].value : element.text
                    const task_notes = event.target.attributes['data-notes'].value ? event.target.attributes['data-notes'].value : element.notes
                    this.sendUpdateTask(event.target.id, 'daily', i18next.t("Update!"), task_title, task_notes)
                } else {
                    const target_id = event.target.id.slice(4)
                    if (event.target.id.slice(0, 4) == "plus") {
                        this.sendScore(target_id, "up", i18next.t('Plus!'))
                    } else {
                        this.sendScore(target_id, "down", i18next.t("Minus :("))
                    }
                }
            })
        }
    }

    handleChangeRewards(event: any) {
        console.log(event)
        if (event.target.id == "add-reward") {
            const title = event.target.name
            this.sendAddTask("reward", title, i18next.t('Add!'))
        } else {
            const target_id = event.target.id
            this.state.tasks.rewards.forEach((element: any) => {
                if (element.id == target_id) {
                    if (event.target.innerText == 'clear') {
                        this.sendDeleteTask(event.target.id, i18next.t('Deleted!'))
                    } else if (event.target.attributes.title.value == 'submit') {
                        const task_title = event.target.attributes['data-title'].value ? event.target.attributes['data-title'].value : element.text
                        const task_notes = event.target.attributes['data-notes'].value ? event.target.attributes['data-notes'].value : element.notes
                        const task_coin = event.target.attributes['data-coin'].value ? event.target.attributes['data-coin'].value : element.reward_value
                        this.sendUpdateTask(event.target.id, 'reward', i18next.t('Edit!'), task_title, task_notes, task_coin)
                    } else {
                        this.sendReward(target_id, "down", i18next.t('Cost!'))
                    }
                }
            })
        }
    }
    render() {
        let content = this.CheckCron(this.state.user_data.lastCron);
        if (this.state.error)
            return (<div className="loading"><Trans>Loading....</Trans></div>)
        else if (!this.state.isLoaded)
            return <div className="loading"><Trans>Loading....</Trans></div>
        else {
            return (<div className="plugin-root">
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
                <Taskview data={this.state.tasks} handleChangeTodos={this.handleChangeTodos} handleChangeDailys={this.handleChangeDailys} handleChangeHabits={this.handleChangeHabits} handleChangeRewards={this.handleChangeRewards} />
                {content}
                <Statsview user_data={this.state.user_data} />
            </div>
            );
        }
    }
}
export default App