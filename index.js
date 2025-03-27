import express from "express";

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send({ message: "Hello from the express app." });
});

app.get("/health", (req, res) => {
  res.send({ message: "Backend is healthy and running." });
});

app.listen(PORT, () => {
  console.log(`Server is up and running in the port ${PORT}`);
});
