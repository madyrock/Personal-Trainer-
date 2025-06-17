require("dotenv").config();
const express = require('express');
const multer = require('multer');
const cors = require('cors');
const nodemailer = require('nodemailer');
const prerender = require('prerender-node');
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());


// Multer setup for file upload
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// POST route to handle trainer registration
app.post('/register', upload.single('document'), async (req, res) => {
  try {
    const { name, email, phone, city } = req.body;
    console.log(req.body);
    const documentFile = req.file;

    console.log(req.file);

    if (!name || !email || !phone || !city || !documentFile) {
      return res.status(400).json({ success: false, error: 'Missing required fields' });
    }

    // Optional: send email notification
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      }
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'amaan.khan848@gmail.com',
      subject: 'New Trainer Registration',
      text: `New trainer registered:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nCity: ${city}`,
      attachments: [
        {
          filename: documentFile.originalname,
          content: documentFile.buffer
        }
      ]
    };

    await transporter.sendMail(mailOptions);

    res.json({ success: true, message: 'Trainer registered and email sent' });
  } catch (err) {
    console.error('Server Error:', err);
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
});

app.listen(PORT, () => console.log(`Server running on https://personal-trainer-0c0y.onrender.com:${PORT}`));
