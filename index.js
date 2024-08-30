require('dotenv').config()
const express = require('express')
//import express from "express" // we can also import in this way
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/help',(req,res)=>{
    res.send('Click here for help')
})
app.get('/email',(req,res)=>{
    res.send('Enter your Email Id')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})

console.log("hello World")
