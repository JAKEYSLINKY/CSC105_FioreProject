const express = require("express"); //use express
const app = express(); //instant express app
const port = 6105;
const mysql = require("mysql2"); //import it in index

//database project description
const connection = mysql.createConnection({
	host: "server2.bsthun.com",
	port: "6105",
	user: "lab_1ogtcc",
	password: "QawuOH0TYDwoJFLt",
	database: "lab_blank01_1o3ugun",
  });

  // Connect to database
connection.connect();

console.log("Database is connected luv note jubjub");

app.get("/", (req, res) => {
  res.send("Before passing the path");
});

app.get("/hello", (req, res) => {
  res.send("luv note xoxo");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

//set request create 
