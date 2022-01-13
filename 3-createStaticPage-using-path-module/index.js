let express = require('express');
let path = require('path');
let app = express();
let basepath = path.join(__dirname, 'public');

app.use(express.static(basepath))



app.listen(200,()=>{
console.log('200 Port Wroking')
})