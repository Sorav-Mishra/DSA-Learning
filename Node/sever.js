const http = require("http");

const hostname = "127.0.0.1";

const port = 3000;

const sever = http.createServer((req, res) => {
  if (req.url === "/") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "Text/plain");
    res.end("hello from solo");
  } else if (req.url === "/login") {
    res.statusCode === 200;
    res.setHeader("Content-Type", "Text/plain");
    res.end("404, not found");
  } else if (req.url === "/order") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "Text/plain");
    res.end("thanks for ordring chai");
  }
});

sever.listen(port, hostname, () => {
  console.log(`Sever is listening at http://${hostname}:${port}`);
});
