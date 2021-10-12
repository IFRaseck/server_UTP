var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
    username: {type: String, required:[true, 'Nombre Obligatorio']},
    password: String,
    active: {type: Boolean, default:true},
});


//CONVERTIR A MODELO

module.exports = mongoose.model('Usuario', usuarioSchema)