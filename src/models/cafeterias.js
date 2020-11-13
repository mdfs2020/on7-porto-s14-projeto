const mongoose = require("mongoose");

const cafeteriasSchema = new mongoose.Schema({
    id: {type: Number},
    descricao:{type: String},
    datainclusao: {type: String},
    endereco: {type: String},
    cidade: {type: String}, 
    estado: {type: String},
    aberto: {type: Boolean}
},{
    versionKey: false
});

 const cafeterias = mongoose.model("collectionCafeterias", cafeteriasSchema);

 module.exports = cafeterias;