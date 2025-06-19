const express = require("express");
const router= express.Router();
const Trainer = require('../model/trainer')


router.post("/register", async (req , res) => {

    try {
        

        const newTrainer =  new Trainer({
            
          name: req.body.name,
          email: req.body.email,
          phone: req.body.phone,
          city: req.body.city,
        });
        console.log("Incoming trainer:", req.body);
        await newTrainer.save();
        console.log("Saved trainer:", trainer);

        res.status(200).json( {message: "Trainer application submitted"})

    } catch (error) {
        res.status(500).json( {massege: "Failed to submit application", error})
    }

})

// Get all trainers (for admin)
router.get("/all", async (req, res) => {
  try {
    const trainers = await Trainer.find();
    res.json(trainers);
  } catch (err) {
    res.status(500).json({ message: "Error fetching trainers." });
  }
});

// Verify a trainer
router.put("/verify/:id", async (req, res) => {
  try {
    const trainer = await Trainer.findByIdAndUpdate(req.params.id, { verified: true });
    res.json({ message: "Trainer verified successfully." });
  } catch (err) {
    res.status(500).json({ message: "Verification failed." });
  }
});




module.exports = router