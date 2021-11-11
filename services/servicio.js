const HabitacionModelo = require('../models/HabitacionModelo.js')


//Servicio para agregar un documento a la bd

async function insertarHabitacion(datosHabitacion){
    let habitacionAInsertar=HabitacionModelo(datosHabitacion)

    return await habitacionAInsertar.save()

}
// servicio para buscar 1 jugador en la bd
async function leerHabitacion(id){
    let habitacion= await HabitacionModelo.findById(id)

    return habitacion
}

//Servicio para buscar todos los jugadores
async function leerHabitaciones(){

    let habitacion=await HabitacionModelo.find();

    return habitacion


}

//Servicio para editar un documento

async function modificarHabitaciones(id,datos){

    return await HabitacionModelo.findByIdAndUpdate(id,datos)

}

//para eliminar un documento

async function borrarHabitaciones(id,){

    return await HabitacionModelo.findByIdAndDelete(id)

}




module.exports ={ 
    insertarHabitacion,
    leerHabitacion,
    leerHabitaciones,
    modificarHabitaciones,
    borrarHabitaciones
}