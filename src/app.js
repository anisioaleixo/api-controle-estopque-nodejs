const express = require('express')
const router = require('./router')
const app = express()
app.use(express.json())
app.get('/',(req,res)=>{
    res.json({
        "API":"Controle de estoque",
        "Autor":"Anisio Aleixo"
    })
})
app.use(router)

module.exports = app