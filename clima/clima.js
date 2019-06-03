const axios = require('axios');

const getClima = async(lat, lng) => {

    const respuesta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=e13a8751c9f6ac591f84eb514c8dbc51`)
    return respuesta.data.main.temp;
}

module.exports = {
    getClima
}