const {Schema, model} = require('mongoose')

const EventoSchema = ({
    nombre_evento:{
        type: String,
        unique:false,
        required:[true, 'El nombre del evento es necesario']
    },

    hora_i:{
        type:String,
        unique: false,
        required:[true, 'La hora inicial del evento es requeriada'],
    },

    hora_f: {
        type:String,
        unique: false,
        required:[true, 'La hora inicial del evento es requeriada'],
    },

    encargado_f: {
        type:String,
        required: [true, 'El encargado de la fundacion es requerido']
    },

    encargado_e: {
        type:String,
        required: [true, 'El encargado de la empresa es requerido']
    },

    encargado_e_t: {
        type:String,
        required: [true, 'Eltelefono del encargado de la empresa es requerido']
    },

    nro_participantes: {
        type: Number,
        required: [true, 'el numero de participantes es necesario']
    },
    estado: {
        type: Boolean,
        default: true
    }
})


module.exports = model('Evento', EventoSchema)