const http = require("http");
const requestHandler = require("./routes");

// event driven architecture
// e.g. => Se A acontecer, então por favor, execute B
const server = http.createServer(requestHandler);

// Sempre que existirem event listeners, node JS vai manter o eventloop ativo e esperar (infinitamente)
server.listen(3001);
