var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pedidoSchema = new Schema({
    nombre: {type: String, required:[true, 'Nombre Obligatorio']},
    telefono: String,
    tipo: String,
    cantidad: String,
    date: {type: Date, default:Date.now},
    active: {type: Boolean, default:true},


});


//CONVERTIR A MODELO

module.exports = mongoose.model('Pedido', pedidoSchema)
