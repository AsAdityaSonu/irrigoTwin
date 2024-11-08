import express from "express";
import dotenv from "dotenv";
import connectDB from "./src/config/Database.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import { extractInfo } from "./src/routes/extractInfo.js";
import { awsS3 } from "./src/routes/awsS3.js";

// ------------------ Setup ------------------
dotenv.config();
const app = express();
connectDB();

// ------------------ Middleware ------------------
app.use(express.json());
app.use(
  cors({
    origin: 'https://irrigo-twin.vercel.app',
    credentials: true,
  })
);
app.use(cookieParser());

// ------------------ Route ------------------
app.get("/", (req, res) => {
  res.send(`
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>IRRIGO TWIN</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f0f8ff;
          color: #333;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
        }
        .container {
          text-align: center;
          padding: 20px;
          border: 2px solid #4caf50;
          border-radius: 10px;
          background-color: #fff;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        h1 {
          color: #4caf50;
        }
        p {
          font-size: 1.2em;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Welcome to IRRIGO TWIN!</h1>
        <p>Your smart irrigation management system.</p>
      </div>
    </body>
    </html>
  `);
});

app.get("/favicon.ico", (req, res) => {
  res.status(204).send();
});

app.use("/extract", extractInfo);
app.use("/aws", awsS3);

// ------------------ Server ------------------
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
