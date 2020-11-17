require("dotenv").config();

var mysql = require("mysql");
var inquirer = require("inquirer");
const cTable = require('console.table');
// const Choice = require("inquirer/lib/objects/choice");
// const { start } = require("repl"); not sure where this came, it automatically appeared

// Establish connection to mysql
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.DB_PASSWORD,
    database: "employeeDB"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("Local host connected as id:" + connection.threadId);
    start();
});

// Start the program and prompt user for input
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
                    viewAllDepartments();
                    break;

                case "View all Emplyees By Role":
                    viewAllRoles();
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
        });
};

// View All Employees //
function viewAllEmployees(){
    connection.query("SELECT employee.first_name, employee.last_name, roles.title, roles.salary, department.name, CONCAT(e.first_name, ' ' ,e.last_name) AS Manager FROM employee INNER JOIN roles on roles.id = employee.role_id INNER JOIN department on department.id = roles.department_id left join employee e on employee.manager_id = e.id;", 
    function(err, res) {
      if (err) throw err
      console.table(res)
      start()
    });
};
// View All Employees By Dept.//
function viewAllDepartments() {
    connection.query("SELECT employee.first_name, employee.last_name, department.name AS Department FROM employee JOIN roles ON employee.role_id = role.id JOIN department ON roles.department_id = department.id ORDER BY employee.id;", 
    function(err, res) {
      if (err) throw err
      console.table(res)
      start()
    });
  };

// View All Employees By Role //
function viewAllRoles() {
    connection.query("SELECT employee.first_name, employee.last_name, roles.title AS Title FROM employee JOIN roles ON employee.role_id = role.id;", 
    function(err, res) {
    if (err) throw err
    console.table(res)
    start();
    });
  };
  
// Add Department //
function addDepartment() { 

    inquirer.prompt([
        {
          name: "name",
          type: "input",
          message: "What Department would you like to add?"
        }
    ]).then(function(res) {
        var query = connection.query(
            "INSERT INTO department SET ? ",
            {
              name: res.name
            
            },
            function(err) {
                if (err) throw err
                console.table(res);
                start();
            }
        )
    })
  }

// Add Role //
// Add Employee //
// Update Employee Role //
