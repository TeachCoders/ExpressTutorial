let express = require('express');
let app = express();

app.get('/', (req, res)=>{
    res.send("Welcome to Our Website")
})

app.get('/electronic/:id0?/:id1?', (req, res)=>{
    if(req.params.id0 == undefined){
        res.send("Electronic List")
    }
    else if(req.params.id1 == undefined){
        res.send(req.params.id0)
    }
    else{
        res.send(`${req.params.id0} > ${req.params.id1}`)
    }
    
})


app.listen(300, (req, res)=>{
    console.log("300 Port Working")
})