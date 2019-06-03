const axios = require('axios');
const lugar = require('../lugar/lugar');
const clima = require('../clima/clima');

const obtenerInfo = () => {
    lugar.getLugarLatLng(direccion)
        .then(respuesta => {
            return respuesta;
        });
}

obtenerInfo().then(console.log);

module.exports = {

}