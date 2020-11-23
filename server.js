// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
app.set ("view enginea", "pug");
app.set ("views","./views");

const express = require("express"); 
const app = express();

// https://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.render("index");
});

app.get("/todos", (req, res) => {
  res.render( ".views/index.pug", {
    users : [ 
         { id: 0, name: "đi chợ"},
         { id: 2, name: "đi chợ"},
         { id: 3, name: "đi chợ"},
         { id: 4, name: "đi chợ"}
    ]
});
});

// listen for requests :)
app.listen(process.env.PORT, () => {
  console.log("Server listening on port " + process.env.PORT);
});
