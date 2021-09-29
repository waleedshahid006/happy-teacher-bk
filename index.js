const express = require("express");
const connectDB = require("./config/db");
const userRoutes = require("./src/api/user");
const app = express();
const cors = require("cors");

// Connect DB
connectDB();

// Init Middleware
app.use(cors());
app.use(express.json({ extended: false }));

// test api
app.get("/", (_req, res) => res.send("API Running"));

// Define routes
app.use("/user", userRoutes);

// port
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
