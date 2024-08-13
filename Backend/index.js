import express from 'express';
import dotenv from 'dotenv';
import connectDB from './src/config/Database.js';

// ------------------ Setup ------------------
dotenv.config();
const app = express();
connectDB();

// ------------------ Route ------------------
app.get('/', (req, res) => {
  res.send('Hello, Welcome to IRRIGO TWIN!');
});

app.get('/favicon.ico', (req, res) => {
  res.status(204).send();
});

// ------------------ Server ------------------
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});