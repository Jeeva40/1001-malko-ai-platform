require("dotenv").config();

const express = require("express");
const cors = require("cors");
//const chatRouter = require("./chat");

console.log("Loading chat router...");
const chatRouter = require("./chat");
console.log("Chat router loaded:", typeof chatRouter);

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/chat", chatRouter);

console.log("✅ Chat router mounted at /api/chat");

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Welcome to Malko AI Concierge Platform",
    version: "1.0.0"
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Malko AI Concierge Platform running on port ${PORT}`);
});