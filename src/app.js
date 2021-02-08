const express = require('express')
const app = express()
app.get('/',(req,res)=>{
    res.json({
        "API":"Controle de estoque",
        "Autor":"Anisio Aleixo"
    })
})

module.exports = app