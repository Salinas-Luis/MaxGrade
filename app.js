const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const ejs = require('ejs');

require('dotenv').config({path: './.env'});

const app = express();
const port = 3000;


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static('public'));

app.get('/', (req, res)=>{
        res.render('index'); 
});

app.get('/Login/login', (req,res) =>{
    res.render('Login/login');
});
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});