// import fetch from "node-fetch";

export async function getStats(username: string, credentials: string){
    const url = "https://habitica.com/export/userdata.json"
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "x-client": `${username}-HabiticaSync`,
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
            "x-client": `${username}-HabiticaSync`,
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
            "x-client": `${username}-HabiticaSync`,
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
            "x-client": `${username}-HabiticaSync`,
            "x-api-user": username,
            "x-api-key": credentials,
        }
    })
    return(response)
}

export async function scoreChecklistItem(username: string, credentials: string, checklistItemID: string, taskID: string) {
    const url = "https://habitica.com/api/v3/tasks/".concat(taskID).concat("/checklist/").concat(checklistItemID).concat("/score")
    const response = fetch(url, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "x-client": `${username}-HabiticaSync`,
            "x-api-user": username,
            "x-api-key": credentials,
        }
    })
    return(response)
}

export async function deleteTask(username: string, credentials: string, taskID: string) {
    console.log(username, credentials, taskID);
    const url = "https://habitica.com/api/v3/tasks/".concat(taskID)
    console.log(url);
    const response = fetch(url, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "x-client": `${username}-HabiticaSync`,
            "x-api-user": username,
            "x-api-key": credentials,
        }
    })
    return(response)
}