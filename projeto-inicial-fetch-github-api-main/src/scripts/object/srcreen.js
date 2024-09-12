const scren = {
    userProfile: document.querySelector('.profile-data'),

    renderUser(user) {

        this.userProfile.innerHTML =
            `<div class= "info">
                        <img src="${user.avatarUrl}" alt="imagem do usuário">
                        <div class="data">
                            <h1>${user.name}</h1>
                            <p>${user.bio}</p>
                            <div class="following-and-followers">
                            
                            <p>
                            <i class="fa-solid fa-user"></i> 
                             ${user.following}</p>
                            <p>
                            <i class="fa-solid fa-users"> </i> ${user.followers}</p>
                            </div>
                        </div>
                        </div>   `
                    
        let repositoriesItens = ""

        user.repositories.forEach(repo => {
            repositoriesItens += `
                                        <li> <a href="${repo.html_url}" target="blank">${repo.name}</a>
                                    <div>
                                        
                                                <span> 🍴 ${repo.forks}</span>
                                                <span> ⭐ ${repo.stargazers_count}</span>
                                                <span>👀 ${repo.watchers} </span>
                                                <span> 👨‍💻 ${repo.language}</span>
                                    </div>
                                       `
        });

        this.userProfile.innerHTML += `
            <div class="repositories">
            <h2>Repositórios</h2>
            <ul>${repositoriesItens}</ul>
            </div>
            `

        let eventsitens = ""

        user.events.forEach(events => {
            if(events.type === "PushEvent" ){

                eventsitens += `
                 <p>${events.repo.name} <span>${events.payload.commits[0].message}</span></p>
               `
            }

            eventsitens += `
                 <p>${events.repo.name} <span>Sem menssagem de commit</span></p>
               `

            
        })
        this.userProfile.innerHTML += `
        <div class="events">
        <h2>Events</h2>
        <div class="events-itens">${eventsitens}</div>
        </div>
        `
    },
    renderNotFound(){
            this.userProfile.innerHTML = "<h1> Conta não existente </h1>"  
    }
 
}

export { scren }            
