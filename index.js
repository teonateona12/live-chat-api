import express from "express";
import http from "http";
import cors from "cors";
const port = process.env.PORT || 3001;
const app = express();
app.use(cors());
const server = http.createServer(app);

app.get("/api", (req, res) => {
  res.send("Hellow fron other world");
});
server.listen(port, () => {
  console.log("server running");
});
