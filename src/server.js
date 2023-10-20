const express = require('express');
const engine = require('ejs-mate');
const path = require('path');

const app = express();

//configuraciones
app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 3000);


//Rutas
app.use('/', require('./routes/index.js'));


//Comenzando el servidor
app.listen(app.get('port'), () => {
    console.log('Servidor en Puerto', app.get('port'));
});
