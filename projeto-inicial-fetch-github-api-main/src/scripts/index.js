// import { getUser } from "../../service/user";

// document.getElementById('btn-search').addEventListener('click', () => {
//     const userName = document.getElementById('input-search').value;
//     getUserProfile(userName)
//     repos(userName)
// })

// document.getElementById('input-search').addEventListener('keyup', (e) => {
//     const userName = e.target.value
//     const key = e.which || e.keyCode

//     if (key === 13) {
//         getUserProfile(userName)
//         repos(userName)
//     }
// })



// async function user(userName) {
//     const response = await fetch(`https://api.github.com/users/${userName}`)
//     return await response.json()
// }


// async function getUserProfile(userName) {
//     user(userName).then((userDate) => {

//         const avatarUrl = userDate.avatar_url
//         const name = userDate.name
//         const bio = userDate.bio

//         const profileData = document.querySelector('.profile-data')
//         let info = `<div class="info">
//             <img src="${avatarUrl}" alt="">
//             <div class="data">
//                 <h1>${name}</h1>
//                 <p>${bio}</p>
//             </div>
//         </div>`

//         profileData.innerHTML = info

//     })
// }

// async function getRepositories(userName) {
//     const response = await fetch(`https://api.github.com/users/${userName}/repos`)
//     return await response.json();
// }

// async function repos(userName) {
//     getRepositories(userName).then((reposData) => {
//         let repositories = ""
        
//         reposData.forEach(e => {

//             const reposUrl = e.html_url
//             const reposName = e.name


//             repositories += `<li> 
//              <div class="info-repo">
//              <a href="${reposUrl}" target="_blank"> ${reposName}</a>
//             `

//             if (repositories.length > 0) {
//                 document.querySelector('.profile-data').innerHTML += ` <div class="repositories section"
//                                                                     <h2>Repositórios</h2>
//                                                                     <ul>${repositories}</ul>
//                                                                    </div> 
//                                                                     `
//             }
//         });

//     })
// }


