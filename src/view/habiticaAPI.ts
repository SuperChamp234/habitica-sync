// import fetch from "node-fetch";

export async function getStats(username: string, credentials: string){
    const url = "https://habitica.com/export/userdata.json"
    const response = fetch(url, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "x-client": username.concat("-testAPI"),
            "x-api-user": username,
            "x-api-key": credentials,
        },
    })
    return (response)
}

export async function scoreTask(username: string, credentials: string, taskID: string, direction: string) {
    const url = "https://habitica.com/api/v3/tasks/".concat(taskID).concat("/score/").concat(direction)
    const response = fetch(url, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "x-client": username.concat("-testAPI"),
            "x-api-user": username,
            "x-api-key": credentials,
        }
    })
    return(response)
}