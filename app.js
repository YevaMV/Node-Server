const http = require('http');

const server = http.createServer((req, res) => {
  // console.log(req.url, req.headers, req.method);

  const url = req.url;

  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Enter message</title></head>');
    res.write(
      '<body><form action="/message" method="POST"><input type="text"><button type="submit">Send</button></form></body>'
    );
    res.write('</html>');
    return res.end(); //exit
  }

  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>First Page</title></head>');
  res.write('<body><h1>Hi from Node.js Server!!!</h1></body>');
  res.write('</html>');
  res.end();
});

server.listen(3000);
