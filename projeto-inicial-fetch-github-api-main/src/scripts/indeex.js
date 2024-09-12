import { getUser } from "./service/user.js"
import { getRepo } from "./service/respositories.js"
import { getEvents } from "./service/events.js"

import { user } from "./object/user.js"

import { scren } from "./object/srcreen.js"

document.getElementById('btn-search').addEventListener('click', () => {
    const userName = document.getElementById('input-search').value
    if(validacaoEmpytInput(userName)) return
    getUserData(userName)

})

document.getElementById('input-search').addEventListener('keypress', (e) => {
    const userName = e.target.value
    const keyCode = e.wich || e.keyCode
    const isEnterKeyPressed = keyCode === 13

    if (isEnterKeyPressed) {
        if(validacaoEmpytInput(userName)) return
        getUserData(userName)
    }


})

function validacaoEmpytInput(userName) {
    if (userName.length === 0) {
        alert("Preencha o input com um user do GitHub")
        return true
    }
}

async function getUserData(userName) {

    const userResponse = await getUser(userName)
    const repositoriesResponse = await getRepo(userName)
    const eventsResponse = await getEvents(userName)
    
    if (userResponse.message === "Not Found") {
        scren.renderNotFound()
        return
    }
    user.setInfo(userResponse)
    user.setRepo(repositoriesResponse)
    user.setEvents(eventsResponse)

    scren.renderUser(user)


}
