const fs = require("fs");

function requestHandler(req, res) {
  const url = req.url;
  if (url === "/") {
    res.write(
      '<html><head><h1>Hello from my Node.js server!</h1><form action="/message" method="POST">\
            <input type="text" name="message" />\
            <button type="submit">Enviar</button></form></head></html>'
    );
    return res.end();
  }
  if (url === "/message" && req.method === "POST") {
    const body = [];
    req.on("data", (chunkOfData) => {
      body.push(chunkOfData);
    }); // conceito de data streaming (data vai ser triggado quando novos chunks estiverem prontos)
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      //pelo caráter async do Node, a fn do FS precisa estar dentro do event listener
      //em ordem de ser executada propriamente com o objeto/primitivo message acima
      fs.writeFileSync("messages.txt", message);
    });
    res.writeHead(302, { Location: "/" });
    return res.end();
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html><head><h1>Hello from my Node.js server!</h1></head></html>");
  res.end();
}

module.exports = requestHandler;
