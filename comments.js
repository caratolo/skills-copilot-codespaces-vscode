// Create web server
// 1. Create a new file in the root of the project called comments.js
// 2. Import the http module
// 3. Create a new server using the createServer method
// 4. Start the server on port 3000
// 5. Use the request and response objects to send and receive data
// 6. Test your server by visiting http://localhost:3000 in your browser

const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello, World!');
});

server.listen(3000, () => {
  console.log('The server is up and running');
});

// Path: comments.js
// Create web server with multiple routes
// 1. Create a new file in the root of the project called comments.js
// 2. Import the http module
// 3. Create a new server using the createServer method
// 4. Use the request and response objects to send and receive data
// 5. Create multiple routes to handle different requests
// 6. Test your server by visiting