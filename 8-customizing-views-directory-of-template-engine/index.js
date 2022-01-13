let express = require('express');
let app = express();
app.set('view engine', 'ejs')
app.set('views', "myfile")


app.get('/contact/:userid', (req, res)=>{
    let user = {
      id :  req.params.userid
    }
    res.render('index', {user})
})

app.listen(250, ()=>{
console.log('250 Port Wroking')  
})