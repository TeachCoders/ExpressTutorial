let express = require('express');
let app = express();
app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
    let user = {
        name : "Ram Kumar",
        email : "ram@gmail.com",
        age : 20,
    }
    res.render('index', {user})
})

app.listen(300, ()=>{
   console.log('300 Port Working')
})