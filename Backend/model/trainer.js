// backend/models/Trainer.js
const mongoose = require("mongoose");

const trainerSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  city: String,
  
  registeredAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Trainer", trainerSchema);
