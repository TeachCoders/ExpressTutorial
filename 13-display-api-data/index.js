let express = require('express');
let request = require('request');
let app = express()
app.set('view engine', 'ejs');

app.get('/product',(req, res)=>{
    request('https://fakestoreapi.com/products', (error, response, body)=>{
        console.error('error:', error);
        let apidata = JSON.parse(body);
        console.log(apidata);

        res.render('product', {apidata})
    })
         
})



app.listen(600, ()=>{
    console.log('600 Port Wroking');
})