var express = require("express");
var url = require("url");
var http = require("http");

var port = 3000;
var app = express();
app.use(express.static(__dirname));
http.createServer(app).listen(port);
console.log("server listening");

var todos = [];
var t1 = { task : "Maths homework due", type  : 1, deadline : "12/12/2015"};
var t2 = { task : "English homework due", type : 3, deadline : "20/12/2015"};
todos.push(t1);
todos.push(t2);

// list todos array
app.get("/todos", function (req, res) {
	console.log("todos requested!");
	res.json(todos);
});

app.get("/addtodo", function (req, res) {
	var url_parts = url.parse(req.url, true);
	var query = url_parts.query;
    console.log(test);
	
	if(query["task"]!==undefined) {
		var tx = { 
			task : query["task"], 
			prio: query["type"],
			date: query["deadline"],
            done: false
		};
		todos.push(tx);
		console.log("Added " + tx.task);
		res.end("Todo added successfully");
	}
	else {
		res.end("Error: missing message parameter");
	}
});

app.get("/remove", function (reg, res) {

})

