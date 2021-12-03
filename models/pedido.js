var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pedidoSchema = new Schema({
    // producto: {
    //     type: Array,
    //     tamaño: String, 
    //     unidades: String, 
    //     complementos: String,
    //     },
    // comprador: {
    //     type: Array,
    //     nombres: String,
    //     apellidos: String,
    //     tipoDocumento: String,
    //     numDocumento: String,
    //     direccion: String,
    //     numeroCasa: String,
    //     barrio: String,
    //     telefono: String,
    //     fechaEntrega: String,
    //     }, 
    
    nombre: {type: String, required:[true, 'Nombre Obligatorio']},
    telefono: String,
    tipo: String,
    cantidad: String,
    date: {type: Date, default:Date.now},
    active: {type: Boolean, default:true},


});


//CONVERTIR A MODELO

module.exports = mongoose.model('Pedido', pedidoSchema)
