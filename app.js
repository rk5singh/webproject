const express=require('express');
const app=express();

app.get('/',(req,res)=>{
    res.send('<h1>Testing for SSH file movement to Github and GitLab</h1>')
})

app.listen(8080,()=>{
    console.log(`The server is running at port 8080`);
})