const {model,Schema}=require('mongoose')

const HabitacionModelo=Schema({
    nombre_habitacion:{
        type:String,
        require:true
    },
    fotografia_habitacion:{
        type:String,
        require:true
    },
    descripcion:{
        type:String,
        require:true
    },
    precio_adulto_noche:{
        type:String,
        require:true
    },
    precio_nino_noche:{
        type:Number,
        require:true
    },
    
})


module.exports = model('habitacion',HabitacionModelo)