let dummyUsers = [];

function ex1_requestHandler(req, res) {
  const url = req.url;

  if (url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(
      "<html><head><h1>Hello, be welcome to my node.js exercise server</h1><p>I hope you're doing great</p></head></html>"
    );
    res.write(
      '<form action="/create-user" method="POST">\
        <input type="text" name="create-user" />\
        <button type="submit">Create new user</button>\
      </form>'
    );
    res.write("<a href='/users'>User's page</a>");
    return res.end();
  }
  if (url === "/users") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(
      "<html>\
        <body>\
          <ul id='user-list'>\
          </ul>\
        </body>\
        <script>const userList = document.getElementById('user-list'); const users = " +
        JSON.stringify(dummyUsers) +
        "; users.forEach(user => \
           {const li = document.createElement('li'); li.textContent = user.replace('+', ' '); userList.appendChild(li)} )</script>\
      </html>"
    );
    return res.end();
  }

  if (url === "/create-user" && req.method === "POST") {
    const body = [];
    req.on("data", (chunks) => {
      body.push(chunks);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const username = parsedBody.split("=")[1];
      dummyUsers.push(username);
      res.writeHead(302, { Location: "/" });
      return res.end();
    });
    return;
  }
}

module.exports = ex1_requestHandler;
