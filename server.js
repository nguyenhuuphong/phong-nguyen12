// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.


const express = require("express"); 
const app = express();

app.set ("view engine", "pug");
app.set ("views","./views");

// https://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.send("tôi yêu lập trình");
});
 
var user =[ 
         { id: 0, name: "đi chợ"},
         { id: 2, name: "đi chợ"},
         { id: 3, name: "đi chợ"},
         { id: 4, name: "đi chợ"}
    ]
app.get("/todo", (req, res) => {
  res.render( "index", {
    users: user
});
});

// listen for requests :)
app.listen(process.env.PORT, () => {
  console.log("Server listening on port " + process.env.PORT);
});
