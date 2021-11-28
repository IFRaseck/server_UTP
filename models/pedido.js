var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pedidoSchema = new Schema({
    nombre: {type: String, required:[true, 'Nombre Obligatorio']},
    telefono: Integer,
    tipo: String,
    cantidad: String,
    date: {type: Date, default:Date.now},
    active: {type: Boolean, default:true},


});


//CONVERTIR A MODELO

module.exports = mongoose.model('Pedido', pedidoSchema)
