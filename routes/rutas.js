//Se trae la funcion Router para 
//separra las rutas de mi api
const { Router }=require('express')

//Importo los controladores
const { registrarHabitacion }=require('../controllers/controlador.js')
const { buscarHabitacion }=require('../controllers/controlador.js')
const { buscarHabitaciones }=require('../controllers/controlador.js')
const { editarHabitacion }=require('../controllers/controlador.js')
const { eliminarHabitacion }=require('../controllers/controlador.js')

//una avribale que personaliza mis rutas
const rutas=Router()

//rutas del api
    rutas.get('/avanzada/v1/habitaciones/:id',buscarHabitacion)
    rutas.get('/avanzada/v1/habitaciones',buscarHabitaciones)
    rutas.post('/avanzada/v1/habitaciones',registrarHabitacion)
    rutas.put('/avanzada/v1/habitaciones/:id',editarHabitacion)
    rutas.delete('/avanzada/v1/habitaciones/:id',eliminarHabitacion)

    module.exports=rutas
