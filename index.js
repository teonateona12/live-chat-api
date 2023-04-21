import express from "express";
import http from "http";
import cors from "cors";

const app = express();
app.use(cors());
const server = http.createServer(app);

app.get("/api", (req, res) => {
  res.send("Hellow fron other world");
});
server.listen(3001 || process.env.PORT, () => {
  console.log("server running");
});
