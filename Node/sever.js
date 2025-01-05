const http = require("http");

const hostname = "Solo";

const port = 3000;

const sever = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-type", "textplain");
  res.end("Hello ice tea");
});

sever.listen(port, hostname, () => {
  console.log(`Sever is listening at http ${hostname} : ${port}`);
});
