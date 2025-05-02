const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hello from Node.js CI/CD Test App!");
});

const PORT = 4000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
