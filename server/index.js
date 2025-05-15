// // server/index.js

// const express = require('express');
// const dotenv = require('dotenv');
// const cors = require('cors');
// const { Resend } = require('resend');
// const path = require('path');


// dotenv.config();

// const app = express();
// const port = 5000;


// app.use(cors());
// app.use(express.json());

// const resend = new Resend(process.env.RESEND_API_KEY);

// const _dirname = path.resolve();

// app.post('/api/send', async (req, res) => {
//   const { name, email, subject, message } = req.body;

//   if (!name || !email || !subject || !message) {
//     return res.status(400).json({ message: 'Missing required fields' });
//   }

//   try {
//   const data = await resend.emails.send({
//     from: 'Portfolio Contact <onboarding@resend.dev>',
//     to: process.env.MY_EMAIL,
//     subject: `${subject} - from ${name}`,
//     reply_to: email,
//     text: message,
//   });

//   res.status(200).json({ message: 'Message sent successfully ✅' });
// } catch (error) {
//   console.error(error);
//   res.status(500).json({ message: 'Submission failed ❌' });
// }

// });

// app.use(express.static(path.join(_dirname, "/Frontend/dist")))
//   app.get("*" , (_,res) => {
//     res.sendFile(path.resolve(_dirname, "Frontend" , "dist" , "index.html"));
// }) 

// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });

// server/index.js
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const { Resend } = require('resend');
const path = require('path');

dotenv.config();

const app = express();
const port = 5000;

app.use(cors({
  credentials:true,
  origin:"https://my-portfolio-wuar.onrender.com"
  }))
app.use(express.json());

const resend = new Resend(process.env.RESEND_API_KEY);

// Use path.resolve() directly where needed instead of redeclaring __dirname

app.post('/api/send', async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    const data = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: process.env.MY_EMAIL,
      subject: `${subject} - from ${name}`,
      reply_to: email,
      text: message,
    });

    res.status(200).json({ message: 'Message sent successfully ✅' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Submission failed ❌' });
  }
});

// Serve static files from the Frontend/dist directory
app.use(express.static(path.join(path.resolve(), "Frontend", "dist")));

// Handle SPA (Single Page Application) - serve index.html for all other routes
// Replace the wildcard route with this:
app.get(/^\/(?!api).*/, (req, res) => {
  res.sendFile(path.join(process.cwd(), 'Frontend', 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
