/**
 * @routes
 * - GET /: The home route. Responds with "This is home route!".
 * - GET /books: A route for listing books. Responds with "All the books will be listed here.".
 * - GET /books/physics: A specific route for physics books. Responds with "All the physics books will be listed here.".
 *
 * @serverInitialization
 * The server starts and listens on port 7000. A console message "server is up... and runing on PORT: 7000"
 * is logged when the server successfully starts.
 */
const express = require("express");

// Making express application, Now this app is all the super of express
const app = express();

// Works
app.get("/", (req, res) => {
  res.send("This is home route!");
});

app.get("/books", (req, res) => {
  res.send("All the books will be listed here.");
});

app.get("/books/physics", (req, res) => {
  res.send("All the physics books will be listed here.");
});

// Give server a port where it will listen the request and send responses.
app.listen(7000, () => {
  console.log("server is up... and runing on PORT: 7000");
});
