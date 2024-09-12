import { baseUrl } from "./variables.js";

async function getEvents(userName){
    const events = await fetch(`${baseUrl}/${userName}/events?per_page=5`)
    return await events.json()
    
}
export { getEvents }