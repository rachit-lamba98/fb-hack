const express = require('express')
require('./db/mongoose.js')
const PortfolioSite = require('./models/Portfolio.js')
const path = require('path')
const ejs = require('ejs')
const fs = require('fs')

const app = express()
const port = process.env.PORT || 3000

filepath = path.join(__dirname, '../public')

app.set('views', path.join(__dirname, '../templates/views'))
app.set('view engine', 'ejs')
app.use(express.static(filepath))
app.use(express.json())

app.post('/users', async (req, res)=>{

    const user = new PortfolioSite(req.body)
    try{
        await user.save()
        res.status(201).send('User created!')
    }catch(e){
        res.status(400).send(e)
    }
})

app.get('', async (req, res) => {
    var phone = parseInt(fs.readFileSync(path.resolve(__dirname, '../database.txt'), 'utf8'))
    try{
        const user = await PortfolioSite.find({phoneNumber: phone})
        res.render('index',{
            data: user[0].siteData
        })
    }catch(e){
        res.status(500).send(e)
    }
})

app.listen(port, ()=>{
    console.log("Server is running on port " + port);
})