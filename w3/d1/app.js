const http = require("http");
const PORT = 8080;

// a function which handles requests and sends response
// const requestHandler = function(request, response) {
//   console.log('In requestHandler'); // NEW LINE
//   response.end(`Requested Path: ${request.url}\nRequest Method: ${request.method}`);
// };

// const server = http.createServer(requestHandler);
// console.log('Server created'); // NEW LINE

// server.listen(PORT, () => {
//   console.log(`Server listening on: http://localhost:${PORT}`);
// });

// console.log('Last line (after .listen call)'); // NEW LINE


const requestHandler = function(request, response) {
  if (request.url === "/") {
    response.end("Welcome!");
  } else if (request.url === "/urls") {
    response.end("www.lighthouselabs.ca\nwww.google.com");
  } else {
    response.statusCode = 404;
    response.end("404 Page Not Found");
  }
};