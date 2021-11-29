// import fetch from "node-fetch";

export async function getStats(username: string, credentials: string){
    const url = "https://habitica.com/export/userdata.json"
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "x-client": "278e719e-5f9c-43b1-9dba-8b73343dc062-HabiticaSync",
            "x-api-user": username,
            "x-api-key": credentials,
        },
    })
    return (await response)
}

export async function scoreTask(username: string, credentials: string, taskID: string, direction: string) {
    const url = "https://habitica.com/api/v3/tasks/".concat(taskID).concat("/score/").concat(direction)
    const response = fetch(url, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "x-client": "278e719e-5f9c-43b1-9dba-8b73343dc062-HabiticaSync",
            "x-api-user": username,
            "x-api-key": credentials,
        }
    })
    return(response)
}
export async function makeCronReq(username: string, credentials: string){
    const url = "https://habitica.com/api/v3/cron";
    const response = fetch(url, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "x-client": "278e719e-5f9c-43b1-9dba-8b73343dc062-HabiticaSync",
            "x-api-user": username,
            "x-api-key": credentials,
        }
    })
    return(response)
}

export async function costReward(username: string, credentials: string, taskID: string, direction: string) {
    const url = "https://habitica.com/api/v4/tasks/".concat(taskID).concat("/score/").concat(direction)
    const response = fetch(url, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "x-client": "278e719e-5f9c-43b1-9dba-8b73343dc062-HabiticaSync",
            "x-api-user": username,
            "x-api-key": credentials,
        }
    })
    return(response)
}


export async function addTask(username: string, credentials: string, title: string, type: string) {
    const url = "https://habitica.com/api/v4/tasks/user"
    const response = fetch(url, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "x-client": "278e719e-5f9c-43b1-9dba-8b73343dc062-HabiticaSync",
            "x-api-user": username,
            "x-api-key": credentials,
        },
        body: JSON.stringify({type: type, text: title})
    })
    return(response)
}

export async function deleteTask(username: string, credentials: string, id: string) {
    const url = "https://habitica.com/api/v4/tasks/".concat(id)
    const response = fetch(url, {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
            "x-client": "278e719e-5f9c-43b1-9dba-8b73343dc062-HabiticaSync",
            "x-api-user": username,
            "x-api-key": credentials,
        }
    })
    return(response)
}

export async function updateTask(username: string, credentials: string, id: string, type: string, title: string, notes: string, coin: string) {
    const url = "https://habitica.com/api/v4/tasks/".concat(id)
    const response = fetch(url, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
            "x-client": "278e719e-5f9c-43b1-9dba-8b73343dc062-HabiticaSync",
            "x-api-user": username,
            "x-api-key": credentials,
        },
        body: type === 'reward' ? JSON.stringify({id: id,type: type, text: title,notes: notes, coin: coin}):JSON.stringify({id: id,type: type, text: title,notes: notes})
    })
    return(response)
}