DROP DATABASE IF EXISTS employeeDB;

-- Create Database --
CREATE DATABASE employeeDB;

USE employeeDB;

-- Creat Department Table --
CREATE TABLE department (
    id INT PRIMARY KEY,
    name VARCHAR (30) NOT NULL
);

-- Create Role Table --
CREATE TABLE roles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT NOT NULL
);

-- Create Employee Table --
CREATE TABLE employee(
    id INT PRIMARY KEY;
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT ,
    manager_id INT,
);

SELECT * FROM department;
SELECT * FROM roles;
SELECT * FROM employee;
