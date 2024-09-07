const http = require("http");
const exerciseRoute = require("./ex1_routes");

const server = http.createServer(exerciseRoute);

server.listen(3002);
