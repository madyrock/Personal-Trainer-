const mongoose = require("mongoose")

const TrainerSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: Number,
    city: String
})

module.exports = mongoose.model('trainer', TrainerSchema)