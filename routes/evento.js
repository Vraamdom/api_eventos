const {Router} = require('express')

const route = Router()


//Listar todos los datos
//Importando el controlador
const { getEvento, postEvento, putEvento, deleteEvento } = require('../controllers/evento')

route.get('/', getEvento)

route.post('/', postEvento)

route.put('/', putEvento)

route.delete('/', deleteEvento)
// //Consultar un dato
// route.get('/consultarUsuario', (req, res) => {
//     res.json({
//         msg: 'Lista Datos'
//     })
// })

// //Metodo para agregar datos
// route.post('/', (req, res) => {
//     res.json({
//         msg: 'Insercion exitosa'
//     })
// })


module.exports = route 