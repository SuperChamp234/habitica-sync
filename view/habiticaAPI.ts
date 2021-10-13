// import fetch from "node-fetch";


export async function getTasks(username: string, credentials: string){
    const url = "https://habitica.com/api/v3/tasks/user?type=todos"
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
    console.log("stats") //can't print stats from here since the response is still an unresolved promise
    return (response)
}