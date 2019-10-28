import express from "express";
import path from "path";
const app = express();
var port = process.env.PORT || 8080;
import * as socketio from "socket.io";
const fileUpload = require('express-fileupload')
const morgan = require('morgan')
// INICIALIZACION APP
app.set( "views", path.join( __dirname, "views" ) );
app.set( "view engine", "ejs" );
app.use(require('body-parser').urlencoded({extended: true}));
app.use(fileUpload())
app.use(morgan('dev'))
app.use(express.static(__dirname + 'public'));
app.use(express.urlencoded({extended: false}))
app.use(express.json())
const { check, validationResult } = require('express-validator/check');
var http = require('http').Server(app);
var io = require('socket.io')(http);
app.get( "/", ( req, res) => {
    res.render("admin"); 

} );

app.get( "/home", ( req, res) => {
    res.render("asdasd"); 

} );

const server = http.listen(8080, function() {
    console.log(`Servidor iniciado: http://localhost:${ port }`);
  });
