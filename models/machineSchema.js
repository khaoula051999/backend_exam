const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MachineSchema = new mongoose.Schema({
    nom: { type: String },
    addresseip: { type: String },
    sysexploitation: { type: String },
    etat: { type: String },
})

module.exports = mongoose.model("Machine", MachineSchema);

