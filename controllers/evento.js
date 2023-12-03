const {response} = require('express')

Evento = require('../models/evento')

const getEvento = async(req, res) => {
    const eventos = await Evento.find(); //Obtener todos los dococumentos de una coleccion
    res.json({
        msg: eventos
    })
}

const postEvento = async(req, res) => {
    const datos = req.body //Capturar datos de la URL-postman
    let mensaje = 'Insercion exitosa'
    try {
        const evento = new Evento(datos) //Instanciar el objeto
        await evento.save()//Guardar en la base de dato  
        console.log(evento) 
    } catch(error) {
        mensaje = error
        console.log(error)
    }

    res.json({
        msg: mensaje
    })
}


const putEvento = async(req, res) =>{
    const {nombre_evento, hora_i, hora_f, encargado_f, encargado_e,encargado_e_t,nro_participantes,estado} = req.body
    try {
        const evento = await Evento.findOneAndUpdate({nombre_evento: nombre_evento},
            {hora_i:hora_i, hora_f:hora_f, encargado_f:encargado_f, encargado_e:encargado_e,
                encargado_e_t:encargado_e_t, nro_participantes:nro_participantes, estado:estado})
            mensaje = 'Actualizacion exitosa'
    } catch(error) {
        mensaje = error
    }
    res.json({
        msg:mensaje
    })
    
}

const deleteEvento = async(req, res) =>{
    const {nombre_evento} = req.query //Desestructurar
    try {
        const evento = await Evento.findOneAndDelete({nombre_evento: nombre_evento})
            mensaje = 'Eliminacion exitosa'
    } catch(error) {
        mensaje = error
    }
    res.json({
        msg:mensaje
    })
    
}


module.exports = {
    getEvento,
    postEvento,
    putEvento,
    deleteEvento
}