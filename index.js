const express = require("express");
const connectDB = require("./config/db");
const userRoutes = require("./src/api/user");
const app = express();

// Connect DB
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

app.get("/", (_req, res) => res.send("API Running"));

// Define routes
app.use("/user", userRoutes);

// port
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
