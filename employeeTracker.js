request("dotenv").config();

var mysql = require("mysql");
var inquirer = require("inquirer");
const cTable = require('console.table');
const Choice = require("inquirer/lib/objects/choice");
// const { start } = require("repl"); not sure where this came, it automatically appeared

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.DB_PASSWORD,
    database: "employeeDB"
});

connection.connect(function (err) {
    if (err) throw err;
    start();
});

function start() {
    inquirer
        .prompt([
            {
                type: "list",
                message: "What would you like to do?",
                name: "choice",
                choices: [
                    "View All Employees",
                    "View All Employees By Department",
                    "View All Employees By Role",
                    "Add Department",
                    "Add Role",
                    "Add Employee",
                    "Update Employee Role"
                ]
            }
        ]).then(function (val) {
            switch (val.choice) {
                case "View All Employees":
                    viewAllEmployees();
                    break;

                case "View All Employee's By Department":
                    viewAllRoles();
                    break;
                case "View all Emplyees By Role":
                    viewAllDepartments();
                    break;

                case "Add Department":
                    addDepartment();
                    break;
                case "Add Role":
                    addRole();
                    break;
                case "Add Employee":
                    addEmployee();
                    break;

                case "Update Employee Role":
                    updateEmployeeRole();
                    break;
            }
        })
}
