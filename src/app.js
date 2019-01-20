//导包
const express = require('express')

//创建app
const app =express()

//处理请求
app.get('/',function(req,res){
    res.send("hello world")
})

//启动
app.listen(3000,'127.0.0.1',function(err){
    if(err){
        console.log(err)
    }
    console.log("start ok")
})