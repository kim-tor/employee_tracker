request("dotenv").config();

var mysql = require("mysql");
var inquirer = require("inquirer");
const cTable = require('console.table');
// const { start } = require("repl"); not sure where this came, it automatically appeared

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.DB_PASSWORD,
    database: "employeeDB"
});

connection.connect(function(err){
    if (err) throw err;
    start();
});

function start(){
    inquirer
    .prompt([
        {}
    ])
};
