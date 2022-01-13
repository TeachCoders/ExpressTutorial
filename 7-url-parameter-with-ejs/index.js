let express = require('express');
let app = express();
app.set('view engine', 'ejs')


app.get('/contact/:userid', (req, res)=>{
    let user ={
        id: req.params.userid
    }
 res.render('index', {user})
})


app.listen(200, ()=>{
    console.log("Port woking on 200")
})
