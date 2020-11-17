USE employeeDB;

-- Insert Departments --
INSERT INTO department (name)
VALUES("Sales"),("Engineering"),("Finance"),("Legal")

-- Insert Roles --
INSERT INTO roles (title, salary, department_id)
VALUE ("Sales Lead", 100000, 1);
INSERT INTO role (title, salary, department_id)
VALUE ("Salesperson", 80000, 1);
INSERT INTO role (title, salary, department_id)
VALUE ("Software Engineer", 120000, 2);
INSERT INTO role (title, salary, department_id)
VALUE ("Lead Engineer", 150000, 2);
INSERT INTO role (title, salary, department_id)
VALUE ("Accountant", 125000, 3);
INSERT INTO role (title, salary, department_id)
VALUE ("Legal Team Lead", 250000, 4);
INSERT INTO role (title, salary, department_id)
VALUE ("Lawyer", 190000, 4);

-- Insert Employees --
INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUE("John", "Doe", 1, 4)
INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUE("Mike", "Chan", 2, 1)
INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUE("Ashley", "Rodriguez", 3, 4)
INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUE("Kevin", "Tupik", 4, null)
INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUE("Malia", "Brown", 5, null)
INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUE("Sarah", "Lourd", 6, null)
INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUE("Tom", "Allen", 7, 6)
