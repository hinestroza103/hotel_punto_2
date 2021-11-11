//EL controlador se encaragar de administrar
//las peticione y repuestas

const {request,response}=require('express')

//importar el servicio

const {insertarHabitacion}=require('../services/servicio.js')
const {leerHabitacion}=require('../services/servicio.js')
const {leerHabitaciones}=require('../services/servicio.js')
const {modificarHabitaciones}=require('../services/servicio.js')
const {borrarHabitaciones}=require('../services/servicio.js')
//cuales son las operaciones
//que debe realizar mi SERVIDOR

async function registrarHabitacion(peticion=request,respuesta=response){

    //caputuro los datos que llegan el cuerpo de la peticion
    let datosHabitaccion=peticion.body;
    //intentar grabar datos en bd usando el servicio
    try{

        await insertarHabitacion(datosHabitaccion)
        respuesta.status(200).json({
            estado:true,
            mensaje:"exito registrando la habitación"
            
        })

    }catch(error){

        respuesta.status(400).json({
            estado:false,
            mensaje:"upssss..."+error
            
        })

    }

  
    
}

async function buscarHabitacion(peticion=request,respuesta=response){

    //capturar el id del cliente a buscar

    let id=peticion.params.id;

    try{

        let habitacion= await leerHabitacion(id)
        respuesta.status(200).json({
            estado:true,
            datos: habitacion
            
        })

    }catch(error){

        respuesta.status(400).json({
            estado:false,
            mensaje:"upssss..."+error
            
        })

    }
    
}

   async function buscarHabitaciones(peticion=request,respuesta=response){

   

    try{

        let habitacion= await leerHabitaciones()
        respuesta.status(200).json({
            estado:true,
            datos: habitacion
            
        })

    }catch(error){

        respuesta.status(400).json({
            estado:false,
            mensaje:"upssss..."+error
            
        })

    }

}

async function editarHabitacion(peticion=request,respuesta=response){
//recibir los datos del body y id de los parametros

    let datos = peticion.body
    let id=peticion.params.id
    try{

        await modificarHabitaciones(id,datos)
        respuesta.status(200).json({
            estado:true,
            mensaje:"exito editando la información de la habitación"
            
        })

    }catch(error){

        respuesta.status(400).json({
            estado:false,
            mensaje:"upssss..."+error
            
        })

    }

}

async function eliminarHabitacion(peticion=request,respuesta=response){

    let id=peticion.params.id
    try{

        await borrarHabitaciones(id)
        respuesta.status(200).json({
            estado:true,
            mensaje:"exito eliminando la habitacion"
            
        })

    }catch(error){

        respuesta.status(400).json({
            estado:false,
            mensaje:"upssss..."+error
            
        })

}
}


module.exports={

    registrarHabitacion,
    buscarHabitacion,
    buscarHabitaciones,
    editarHabitacion,
    eliminarHabitacion
}