var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pedidoSchema = new Schema({
    producto: {
        type: Array,
        tamaño: '', 
        unidades: '', 
        complementos: '',
        },
    comprador: {
        type: Array,
        "id": 1,
        nombres: '',
        apellidos: '',
        tipoDocumento: '',
        numDocumento: '',
        direccion: '',
        numeroCasa: '',
        barrio: "",
        telefono: '',
        fechaEntrega: '',
        }, 
    
    // nombre: {type: String, required:[true, 'Nombre Obligatorio']},
    // telefono: String,
    // tipo: String,
    // cantidad: String,
    // date: {type: Date, default:Date.now},
    // active: {type: Boolean, default:true},


});


//CONVERTIR A MODELO

module.exports = mongoose.model('Pedido', pedidoSchema)
