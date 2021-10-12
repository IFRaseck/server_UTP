var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productoSchema = new Schema({
    nombre: {type: String, required:[true, 'Nombre Obligatorio']},
    descripcion: String,
    tipo: String,
    precio: String,
    date: {type: Date, default:Date.now},
    active: {type: Boolean, default:true},


});


//CONVERTIR A MODELO

module.exports = mongoose.model('Producto', productoSchema)