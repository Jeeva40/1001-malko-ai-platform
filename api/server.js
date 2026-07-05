require("dotenv").config();

const express = require("express");
const cors = require("cors");
//const chatRouter = require("./chat");

console.log("Loading chat router...");
const chatRouter = require("./chat");
console.log("Chat router loaded:", typeof chatRouter);

const businessProfileRouter = require("./businessProfile");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/chat", chatRouter);
app.use("/api/business-profile", businessProfileRouter);

console.log("✅ Chat router mounted at /api/chat");
console.log("✅ Business Profile router mounted at /api/business-profile");

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Welcome to Malko AI Platform",
    version: "1.0.0"
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Malko AI Platform running on port ${PORT}`);
});