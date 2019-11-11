import express from "express";
import path from "path";
const app = express();
var port = process.env.PORT || 8082;
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


app.get( "/home", ( req, res) => {
    res.render("asdasd"); 

} );


app.post( "/Liga", ( req, res) => {
    console.log(req.body.id_Liga)
    res.render("ne",{liga:req.body.id_Liga}); 

} );



app.post( "/Equipo", ( req, res) => {
    console.log(req.body.id_Equipo)
    res.render("team",{equipo:req.body.id_Equipo}); 

} );


app.post( "/tickets", ( req, res) => {
    res.render("tickets",{evento:req.body.id_Evento}); 

} );

app.get( "/qw8pSpWEvGVKQzSA/pre/", ( req, res) => {
    res.render("pre_admin"); 

} );


app.get( "/qw8pSpWEvGVKQzSA/admin/", ( req, res) => {
    res.render("admin"); 

} );

app.post( "/compra", ( req, res) => {
    res.render("compra",{evento:req.body.id_Evento,ticket:req.body.id_Ticket}); 

} );




app.get( "/qw8pSpWEvGVKQzSA/admin/estadios", ( req, res) => {
    res.render("admin_stadiums"); 

} );


app.get( "/qw8pSpWEvGVKQzSA/admin/eventos", ( req, res) => {
    res.render("admin_evento"); 

} );

app.get( "/qw8pSpWEvGVKQzSA/admin/users", ( req, res) => {
    res.render("admin_usuarios"); 

} );

app.get( "/ne", ( req, res) => {
    res.render("ne"); 

} );


const server = http.listen(8082, function() {
    console.log(`Servidor iniciado: http://localhost:${ port }`);
  });
