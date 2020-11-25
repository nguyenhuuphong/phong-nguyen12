// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.


const express = require("express"); 
const app = express();
const pug = require('pug');

app.set ('view engine', 'pug');
app.set ("views","./views");

// https://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.send("tôi yêu lập trình");
});
 
var user =[ 
         { id: 0, name: "đi chợ"},
         { id: 2, name: "nấu ăn"},
         { id: 3, name: "nâu cháo"},
         { id: 4, name: "nâu ngủ"}
    ]
app.get("/todo", (req, res) => {
  res.render( "index", {
    todo: user
});
});
app.get("/todo/123", (req, res) => {
  var q = req.query.q;
  var   match = user.filter(function(item) {
           return item.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;

  });
  res.render('index', {
		todo: match 
	});

});

app.get("/todo?q=nâu", (req, res) => {
  var q = req.query.q;
  var   match = user.filter(function(item) {
           return item.name.toLowerCase().indexOf(q.toLowerCase()) === q;

  });
  res.render('index', {
		todo: match 
	});
});

// listen for requests :)
app.listen(process.env.PORT, () => {
  console.log("Server listening on port " + process.env.PORT);
});
