// const express = require("express");
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
const app = express();
const port = process.env.PORT || 3001;
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/", async (req, res) => {
  let lead = req.body;
  try {
    const n8nRes = await fetch(
      "http://localhost:5678/webhook/8e831a3b-2b68-43cb-81bb-e5f8844292fb",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(lead),
      }
    );
    console.log("Sent to n8n:", await n8nRes.text());
    res
      .status(200)
      .json({ success: true, message: "Lead received and sent to n8n." });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Error sending data to n8n." });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
