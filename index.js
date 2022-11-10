const express = require('express')
const Contenedor = require("./archivosContainer/container")

const app = express();
const PORT = 8080


const contenedor = new Contenedor ("productos.txt")

app.get("/productos", async (req, res) => {
    const productos = await contenedor.getAll();
    res.json(productos);
});

app.get("/random", async(req, res)=>{
    const productos = await contenedor.getAll();
    const random = parseInt(Math.random()*productos)
    res.json({Productos:productos[random]})
})

//config puerto
const server = app.listen(PORT, () =>{
    console.log(`Servidor express corriendo en el puerto: ${PORT}`);
    
})
//config error
server.on('error', error => console.log(`error en el servidor ${error}`))