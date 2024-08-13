import express from 'express';
import dotenv from 'dotenv';
import connectDB from './src/db/Database.js';

// ------------------ Setup ------------------
dotenv.config();
const app = express();
connectDB();

// ------------------ Route ------------------
app.get('/', (req, res) => {
  res.send('Hello, Welcome to IRROGO TWIN!');
});

app.get('/favicon.ico', (req, res) => {
  res.status(204).send(); // Ensure you send a response
});

// ------------------ Server ------------------
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});