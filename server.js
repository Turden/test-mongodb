const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const router = require('./router');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(router);

const port = 3000;

db.connect('mongodb://localhost:27017/myapi',(err)=>{
    if (err){
        throw new Error(err)
    }
    app.listen(port,()=>console.info("Server is started on %s",port));
});