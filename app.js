const http = require('http');

const server = http.createServer((req, res) => {
  // console.log(req.url, req.headers, req.method);

  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>First Page</title></head>');
  res.write('<body><h1>Hi from Node.js Server!!!</h1></body>');
  res.write('</html>');
});

server.listen(3000);
