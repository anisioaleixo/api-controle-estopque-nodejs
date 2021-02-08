const express = require('express')
const PORT = process.env.PORT || 3000
const app = express()
app.get('/',(req,res)=>{
    res.json({
        "API":"Controle de estoque",
        "Autor":"Anisio Aleixo"
    })
})
app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`)
})