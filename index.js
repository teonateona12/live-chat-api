import express from "express";
import http from "http";
import cors from "cors";

const app = express();
app.use(cors());
const server = http.createServer(app);

server.listen(3001, () => {
  console.log("server running");
});
