let express = require('express');
let app = express();
app.set('view engine', 'ejs');

app.get('/',(req, res)=>{

    let student = [
        {id : 1, name : "Ram", age :25},
        {id : 2, name : "Shyan", age :28},
        {id : 3, name : "Suresh", age :20},
        {id : 4, name : "ganesh", age :15},
        {id : 5, name : "Mahesh", age :17}
    ]
    res.render('index', {studentlist:student})
})

app.listen(250, ()=>{
    console.log("250 Port Wroking")
})
