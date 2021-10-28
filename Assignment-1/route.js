const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  console.log(url);

  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>home</title></head>");
    res.write(
      "<body><h1>Hello welcome to this new exiting homePage</h1></body>"
    );

    res.write(
      "<form action='/create-user' method='POST'><input type='text' name='username'>"
    );
    res.write("<button type='submit'>Send</button></form >");

    res.write("</body>");
    res.write("</html>");
    return res.end();
  }

  if (url === "/user") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>userData</title></head>");
    res.write("<body><h1>USERS-DATA</h1>");
    res.write("<ul><li>user 1</li>");
    res.write("<li>user 2</li>");
    res.write("<li>user 3</li>");
    res.write("</ul>");
    res.write("</body >");
    res.write("</html>");
    return res.end();
  }
  if (url === "/create-user" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });

    req.on("end", () => {
      let parsebody = Buffer.concat(body).toString();
      let message = parsebody.split("=")[1];
      console.log(parsebody);
      console.log(message);
    });
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }
};

module.exports = {
  requestHandler: requestHandler,
};
