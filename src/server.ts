import express from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config({ path: process.env.NODE_ENV === 'DEV' ? '.env.development' : '.env.production' });

const PORT = process.env.PORT || 3300;
const app = express();
app.use(express.json());

// setting cors
app.use(
  cors({
    origin: "http://localhost:3000",
  }),
);

// welcome
app.get("/", (req, res) => res.send("Welcome to meeto"));

// users api
// app.use("/api/users", userRoutes);

// error handler
// app.use(errorHandler);

// starting server
app.listen(PORT, () => console.log(`Server started at ${PORT}`));
