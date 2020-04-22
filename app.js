//Este codigo permite crear una aplicacion de web server
const http = require('http');

// la funcion escucha y respuesta
http.createServer((req, res) => {
        res.writeHead(200, { 'content-Type': 'application/json' });

        let salida = {
            nombre: 'fernando',
            edad: 32,
            url: req.url
        }
        res.write(JSON.stringify(salida));
        //res.write('Hola Mundo');
        res.end(); // ponerlo o sino la pagina va estar cargando sin parar
    })
    .listen(8080); // Puerto localmente

console.log('Escuchando el puerto 8080');