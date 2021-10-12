var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const servicioSchema = new Schema({
    nombre: {type: String, required:[true, 'Nombre Obligatorio']},
    descripcion: String,
    usuarioId: String,
    date: {type: Date, default:Date.now},
    active: {type: Boolean, default:true},
});


//CONVERTIR A MODELO

module.exports = mongoose.model('Servicio', servicioSchema)