let express = require('express');
let bodyparser = require('body-parser'); // import
let app = express();
app.use(bodyparser.urlencoded({extended:true})) // creae urle encoded
app.set('view engine', 'ejs')


app.get('/', (req, res)=>{
    res.render('index')
});


app.post('/dashboard', (req, res)=>{
    let name = req.body.user;
    let mail = req.body.email;
    let mob = req.body.mobile;

    let userobj = {
        name_user : name,
        mail_user : mail,
        mob_user : mob
    }

    console.log(userobj )

    res.render('dashboard', {userobj})
});







app.listen(600, ()=>{
    console.log('600 Port Wroking')
})


