const {conexion } = require("./base de datos/conexion")
const express = require("express")
const cors = require("cors")

console.log("Hola que tal")

conexion();

//ccrear servidor node
const app = express()
const puerto = 3900

//configurar cors 
app.use(cors())

//convertir body a objeto js
app.use(express.json())
app.use(express.urlencoded({extended : true})) //form url encoded

//crear rutas

//rutas de prueba harcodeadas
app.get("/probando",(req,res) =>{
    console.log("se ha ejecutado el endpoint probandoo")
    return res.status(200).send({
        curso : "Master en React",
        authot : "Alex",
        url : "linkedin.com/Alexpa"
    })   
})

app.get("/",(req,res) =>{
    console.log("se ha ejecutado el endpoint probandoo")
    return res.status(200).send(`
    <h1>
    Probando otra ruta con datos simple
    </h1>
    `
    )   
})
//RUTAS

const rutas_articulos = require("./rutas/articulo")
//cargando rutas
app.use("/api" , rutas_articulos);

app.get("/probando")


//crear servidor y escuchar peticiones http
app.listen(puerto, () => {
    console.log("Servidor  corriendo en el puerto "+puerto)

});