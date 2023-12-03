const {response} = require('express')

Participante = require('../models/participante')

const getParticipante = async(req, res) => {
    const participantes = await Participante.find(); //Obtener todos los dococumentos de una coleccion
    res.json({
        msg: participantes
    })
}

const postParticipante = async(req, res) => {
    const datos = req.body //Capturar datos de la URL-postman
    let mensaje = 'Insercion exitosa'
    try {
        const participante = new Participante(datos) //Instanciar el objeto
        await participante.save()//Guardar en la base de dato  
        console.log(participante) 
    } catch(error) {
        mensaje = error
        console.log(error)
    }

    res.json({
        msg: mensaje
    })
}


const putParticipante = async(req, res) =>{
    const {nombre_completo, edad, genero_biologico, tipo_documento, asistencia,Placa_vehiculo_personal,nro_documento} = req.body
    try {
        const participante = await Participante.findOneAndUpdate({nombre_completo: nombre_completo},
            {edad:edad, genero_biologico:genero_biologico, tipo_documento:tipo_documento, asistencia:asistencia,
                Placa_vehiculo_personal:Placa_vehiculo_personal, nro_documento:nro_documento})
            mensaje = 'Actualizacion exitosa'
    } catch(error) {
        mensaje = error
    }
    res.json({
        msg:mensaje
    })
    
}

const deleteParticipante = async(req, res) =>{
    const {nombre_completo} = req.query //Desestructurar
    try {
        const participante = await Participante.findOneAndDelete({nombre_completo: nombre_completo})
            mensaje = 'Eliminacion exitosa'
    } catch(error) {
        mensaje = error
    }
    res.json({
        msg:mensaje
    })
    
}


module.exports = {
    getParticipante,
    postParticipante,
    putParticipante,
    deleteParticipante
}