require('dotenv').config()
const express = require('express')
//import express from "express" // we can also import in this way
const app = express()
const port = 4000
const githubData = {
    "login": "Mtiga10",
    "id": 37522216,
    "node_id": "MDQ6VXNlcjM3NTIyMjE2",
    "avatar_url": "https://avatars.githubusercontent.com/u/37522216?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Mtiga10",
    "html_url": "https://github.com/Mtiga10",
    "followers_url": "https://api.github.com/users/Mtiga10/followers",
    "following_url": "https://api.github.com/users/Mtiga10/following{/other_user}",
    "gists_url": "https://api.github.com/users/Mtiga10/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Mtiga10/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Mtiga10/subscriptions",
    "organizations_url": "https://api.github.com/users/Mtiga10/orgs",
    "repos_url": "https://api.github.com/users/Mtiga10/repos",
    "events_url": "https://api.github.com/users/Mtiga10/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Mtiga10/received_events",
    "type": "User",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 11,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2018-03-19T01:28:03Z",
    "updated_at": "2024-08-30T12:51:34Z"
    }


app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/help',(req,res)=>{
    res.send('Click here for help')
})
app.get('/email',(req,res)=>{
    res.send('Enter your Email Id')
})
app.get('/github',(req,res)=>{
    res.json(githubData)
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})

console.log("hello World")
