const validator = require("validator")
const Articulo = require("../modelos/Articulo")

const prueba = (req,res) => {
    return res.status(200).json({
        mensaje : "Soy una accion en mi controlador de pruebas de articulos"
    })
}

const curso = (req, res) => {
    console.log("Se ha ejecutado el endpoint curso");

    return res.status(200).json([{
        curso: "Master en React",
        autor: "Victor Robles WEB",
        url_img:"linkedin.com/Alex"
    },
    {
        curso: "Master en React",
        autor: "Victor Robles WEB",
        url_img:"linkedin.com/Alex"
    }]
    )
}
 
const crear = (req,res) => {    

    let parametros = req.body;
    //validar datos
    // try {   
    //     let validar_titulo = !validator.isEmpty(parametros.titulo) && 
    //                             validator.isLength(parametros.titulo,{min : 5 , max : 25})

    //     let validar_contenido = !validator.isEmpty(parametros.contenido);
  

    //     if(!validar_titulo || !validar_contenido){
    //         throw new Error('Los campos titulo y contenido son requeridos');
    //     }

    // } catch (error) {
    //     return res.status(400).json({
    //         status: "error",
    //         mensaje: "Faltan datos por enviar" 
    //     })
    // }

    //crear el objeto a guardar 
    const articulo = new Articulo(parametros);

    //guardar el articulo en la base de datos
    articulo.save()
        .then((articuloGuardado) => {
            return res.status(200).json({
                status: 'success',
                Articulo: articuloGuardado,
                mensaje: 'Articulo creado con exito'
            });
        })
        .catch((error)=>{
            return res.status(400).json({
                status: 'error',
                mensaje: 'No se ha guardado el articulo' + error.message
            })
        })
}


module.exports = {
    prueba,
    curso,
    crear
}

