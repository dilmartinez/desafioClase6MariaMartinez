const express = require('express')
const classContainer = require('./archivosContainer/container')

const app = express();

const PORT = 8080



const server = app.listen(PORT, () =>{
    console.log(`Servidor corriendo en el puerto: ${PORT}`);
})