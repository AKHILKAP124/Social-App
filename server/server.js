import express from "express";
import dotenv from "dotenv";
import connectDb from "./Database/index.js";
import userRouter from "./routes/User.js";

// Load environment variables from.env file
dotenv.config({
  path: "./.env",
});

// Create the Express app instance
const app = express({
  cors: {
    origin: "*",
  },
});

// Define middleware to parse JSON request bodies
app.use(express.json({
    limit: "50mb", // limit
    extended: true, // extended
    
}));
app.use(express.urlencoded({ extended: true }));

// Define API endpoints

// Start the server
connectDb().then(() => {
  app.listen(3000, () => {
    console.log("Server started on port 3000");
  });
});

// api endpoint

app.use('/api/v1/users', userRouter)


