let expres = require('express');
let app = expres();
app.set('view engine', 'ejs')


app.get('/', (req, res)=>{  
    res.render('index');
})


app.get('/submit', (req, res)=>{  
    let x = req.query
    console.log(x)
   
    res.render('submit', {x});
})



 

app.listen("300", ()=>{
    console.log('300 Port Wroking')
})

