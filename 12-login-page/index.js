let express = require('express');
let bodyParser = require('body-parser');
let app = express();
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended:true}))

app.get('/', (req,res)=>{
    res.render('index');
})

app.post('/dashboard', (req, res)=>{
    let user = req.body.username;  
    let pas = req.body.password;   
    console.log (user)
    if(user == "Teach Coders" && pas == '1234' ){
        res.render('dashboard');
    }
    else{
        res.redirect('/invalid')
    }
})

app.get('/invalid',(req, res)=>{
    res.render('invalid')
})



app.listen(500, () => {
    console.log('500 Port Wroking')
})