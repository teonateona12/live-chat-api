import express from "express";
import http from "http";
import cors from "cors";
import { Server } from "socket.io";
const port = process.env.PORT || 3001;
const app = express();
app.use(cors());
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "https://live-chat-front-two.vercel.app/",
  },
});
io.on("connection", (socket) => {
  socket.on("join_room", (data) => {
    socket.join(data);
  });
  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data);
  });
  socket.on("disconnect", () => {});
});
app.get("/api", (req, res) => {
  res.send("Heloo");
});

server.listen(port);
