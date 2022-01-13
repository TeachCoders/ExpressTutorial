let express = require('express');
let path = require('path');
let base = path.join(__dirname,'public-2');
let app = express();

app.get('/',(req, res)=>{
    res.sendFile(`${base}/index.html`)
})
app.get('/about',(req, res)=>{
    res.sendFile(`${base}/about.html`)
})

app.get('/contact',(req, res)=>{
    res.sendFile(`${base}/contact.html`)
})

app.get('*',(req, res)=>{
    res.sendFile(`${base}/404.html`)
})

app.listen(200, ()=>{
    console.log('200 Port Wroking')
})