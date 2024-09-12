import { baseUrl } from "./variables.js"
async function getUser(userName) {
    const userUrl = await fetch(`${baseUrl}/${userName}`)
    return await userUrl.json()

}

export { getUser }