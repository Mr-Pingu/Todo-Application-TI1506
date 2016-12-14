/* global Buffer */
/* global __dirname */
var express = require("express");
var url = require("url");
var http = require("http");

var port = 3000;
var app = express();
app.use(express.static(__dirname));
http.createServer(app).listen(port);

var todos = [];
var t1 = { task : "Maths homework due", prio  : 1, date : "12/12/2015", done : "false" };
var t2 = { task : "English homework due", prio : 3, date : "20/12/2015", done : "false"};
todos.push(t1);
todos.push(t2);

//clients requests todos
app.get("/todos", function (req, res) {
	console.log("todos requested!");
	res.json(todos);
});

//add todo to the server
app.get("/addtodo", function (req, res) {
	var url_parts = url.parse(req.url, true);
	var query = url_parts.query;

	if(query["task"]!==undefined) {
		var tx = { task : query["task"],
			prio: query["prio"],
			date: query["date"],
			done: query["done"]
		};
		todos.push(tx);
		console.log("Added " + tx.task);
		res.end("Todo addeds successfully");
	}
	else {
		res.end("Error: missing task parameter");
	}
});

app.get("/edittodo", function (req, res) {
	var url_parts = url.parse(req.url, true);
	var query = url_parts.query;
  var index =  query["index"];
	console.log(index);
	if(query["task"]!==undefined) {
		var tx = { task : query["task"],
			prio: query["prio"],
			date: query["date"],
			done: query["done"]

		};
		todos[index] = tx;
		console.log("edited " + tx.task + index);
		res.end("Todo edited successfully");
	}
	else {
		res.end("Error: missing task parameter");
	}
});

app.get("/removetodo", function (req, res) {
	var url_parts = url.parse(req.url, true);
	var query = url_parts.query;
  var index = query["index"];
	console.log(index);

		todos.splice(index,1);
		console.log("removed + index");
		res.end("Todo removed successfully");

});
