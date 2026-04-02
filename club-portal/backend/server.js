const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// 🔥 Connect MongoDB
mongoose.connect(process.env.MONGO_URI, {
  serverSelectionTimeoutMS: 20000,
})
.then(() => console.log("✅ MongoDB Connected"))
.catch(err => console.log("❌ MongoDB Error:", err));

app.use("/api/auth", require("./routes/auth"));
app.use("/api/events", require("./routes/events"));

app.get("/", (req, res) => {
    res.send("🚀 Club Management Backend is Running!");
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});