import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Olá!" });
});

app.post("/", (req, res) => {
  return res.json({ message: "POST feito com sucesso!" });
});

app.listen(3333, () => {
  console.log("server is running on port 3333");
});
