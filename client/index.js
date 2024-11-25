import express from "express";
import { cardData } from "../client/src/data.js";

const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/api/cardData", (req, res) => {
  res.send(cardData);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
