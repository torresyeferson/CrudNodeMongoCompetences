var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    objectId = mongoose.Schema.ObjectId;

var instrumentoSchema = new Schema({
    _id: { type: objectId, auto: true },
    codigo: { type: String, required: true, trim: true },
    nivel: { type: String, required: true, trim: true },
    valor: { type: String, required: true, trim: true },
    texto: { type: String, required: true, trim: true }
}, {
    versionKey: false
});

var instrumento= mongoose.model('instrumento', instrumentoSchema);

module.exports = instrumento;