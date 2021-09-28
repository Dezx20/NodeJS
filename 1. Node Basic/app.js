const http = require("http");
const fs = require("fs");

const reqListener = (req, res) => {
  // console.log(req.url, req.method, req.headers);
  // process.exit(1);
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Enter Message</title></head>");
    res.write(
      "<body><form action='/message' method='POST'> <input type='text' name='message'><button type='submit'>Send</button></form></body>"
    );
    res.write("</html>");
    return res.end();
  }

  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });

    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
    });

    fs.writeFileSync("message.txt", "dummy");
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Sending page from server</title></head>");
  res.write("<body><h1>Hello from my node.js server</h1></body>");

  res.write("</html>");
  res.end();
};

const server = http.createServer(reqListener);

server.listen(3000);
