const express = require("express")
const { appConfig } = require("./config/app.config")

const app = express()




app.all("*",(req,res)=>{
    res.status(400).send({
        message: `Your given ${req.url} not working`
    })
})



app.listen(appConfig.PORT,()=>console.log(`server is running on: http://${appConfig.APP_HOST}:${appConfig.PORT}`))