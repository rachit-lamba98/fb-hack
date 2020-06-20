const express = require('express')
const mongoose = require('mongoose')
const PortfolioSite = require('./models/Portfolio.js')
const fs = require('fs')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())


var userMap = JSON.parse(fs.readFileSync('config.json', 'utf8'))


app.post('/users', async (req, res)=>{

    mongoose.connect('mongodb://127.0.0.1:27017/' + req.body.phoneNumber, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    })

    const user = new PortfolioSite(req.body)
    try{
        await user.save()
        res.status(201).send('User created!')
    }catch(e){
        console.log("Could not create user." + e)
        res.status(400).send(e)
    }
})

app.get('/:url', async (req, res) => {
    const url = req.params.url 
    try{
        const user = await PortfolioSite.find({siteURL: url})
        res.send(user)
    }catch(e){
        res.status(500).send(e)
    }
})

app.listen(port, ()=>{
    console.log("Server is running on port " + port);
})