import { baseUrl, reposQuantity } from "../service/variables.js";


async function getRepo(userName) {
    const repositories = await fetch(`${baseUrl}/${userName}/repos?per_page=${reposQuantity}`)
    return await repositories.json()
}

export { getRepo }