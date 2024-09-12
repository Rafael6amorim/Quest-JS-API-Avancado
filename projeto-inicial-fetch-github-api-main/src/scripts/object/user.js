const user = {
    avatarUrl: "",
    name: "",
    bio: "",
    following:"",
    followers:"",
    repositories:[],
    forks:"",
    star:"",
    whatchrs:"",
    language:"",
    events:[],
    setInfo(githubUser){
        this.avatarUrl = githubUser.avatar_url
        this.name = githubUser.name
        this.bio = githubUser.bio
        this.following = githubUser.following
        this.followers = githubUser.followers
    },
    setRepo(githubRepositories){     
        this.repositories = githubRepositories
    },
    setEvents(githubEvents){
       this.events = githubEvents 
    }
    
}

export{ user }