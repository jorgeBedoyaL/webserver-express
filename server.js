//Importamos express
const express = require('express');
//Nos permite usar express
const app = express();
//Importamos hbs
const hbs = require('hbs');
// Importamos el archivo helpers
const helpers = require('./hbs/helpers');

//reconocer el puerto si estoy en local, process es una variable global
const port = process.env.PORT || 3000;


//Especificar el folder que queremos sea publico
app.use(express.static(__dirname + '/public'));

//Decir a hbs que en el directorio views /parciales se va a contener los parciales
hbs.registerPartials(__dirname + '/views/parciales');
// Express HBS engine
app.set('view engine', 'hbs');

//Configurar la peticion que inicie con pecla slash
app.get('/', (req, res) => {
    //Renderizar o enviar a home.hbs trabaja con express view engine
    // Enviamos los datos renderizados nombre y año
    res.render('home', {
        nombre: 'Jorge',
        anio: new Date().getFullYear()
    });
});

app.get('/about', (req, res) => {
    //Renderizar o enviar a home.hbs trabaja con express view engine
    // Enviamos los datos renderizados nombre y año
    res.render('about', {
        anio: new Date().getFullYear()
    });
});



// que no s muestre en consola que esl servidor esta 
//funcionando
app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`)
});