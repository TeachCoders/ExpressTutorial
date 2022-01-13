let express = require('express');
let app = express();

app.get('/', (req, res)=>{
    res.send(`<a href="/">Home</a> | <a href="/about">About</a> | <a href="/contact">Contact</a> 
        <h1>Home Page</h1>
    `)
})

app.get('/about', (req, res)=>{
    res.send(`<a href="/">Home</a> | <a href="/about">About</a> | <a href="/contact">Contact</a> 
        <h1>About Us Page</h1>
    `)
})

app.get('/contact', (req, res)=>{
    res.send(`<a href="/">Home</a> | <a href="/about">About</a> | <a href="/contact">Contact</a> 
    <h1>Contact Page</h1>
`)
})

app.listen(200, ()=>{
    console.log('200 Port Wroking')
})
