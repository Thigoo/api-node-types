import express from "express";

const server = express();

server.get("/", (req, res) => {
  res.end("Hello World!");
});

export { server };
