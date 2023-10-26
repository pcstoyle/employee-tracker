const express = require('express');
const inquirer = require('inquirer');
// Import and require mysql2
const mysql = require('mysql2');


const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Connect to SQL database
const db = mysql.createConnection(
    {
        host: '127.0.0.1',
        // MySQL username,
        user: 'root',
        // TODO: Add MySQL password here
        password: 'password',
        database: 'employees_db;'
    },
    console.log(`Connected to the employees_db database.`)
);

//Node prompting user to make table selection out of db  
const databaseInquiry = [
    {
        type: 'list',
        name: 'selection',
        choices: ["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee", "Update employee role"],
        message: 'Please make a selection.'
    },
];


const addDepartment = [
    {
        type: 'input',
        name: 'deptName',
        message: 'Enter the new departments name.',
    },
];

const addRole = [
    {
        type: 'input',
        name: 'role',
        message: 'Enter the name of the role',
    },
    {
        type: 'input',
        name: 'salary',
        message: 'Enter salary',
    },
    {
        type: 'list',
        name: 'roleDept',
        message: 'Select a department',
        choices: [],
    }
]

const addEmp = [
    {
        type: 'input',
        name: 'empFirstName',
        message: 'Enter the employees first name.',
    },
    {
        type: 'input',
        name: 'empLastName',
        message: 'Enter the employees last name.',
    },
    {
        type: 'list',
        name: 'empRole',
        message: 'Select the employees role.',
        choices: [],
    },
    {
        type: 'list',
        name: 'empManager',
        message: 'Select the employees manager.',
        choices: [],
    },
]

const updateEmployee = [
    {
        type: 'list',
        name: 'employeeSelect',
        message: 'Select employee you would like to update:',
        choices: [],
    },
    {
        type: 'list',
        name: 'employeeNewRole',
        message: 'Select employee role',
        choices: [],
    },
];

function response(answer) {
    if (answer.databaseInquiry === 'View all departments') {
        connection.query('SELECT * FROM departments', function (err, results) {
            console.log(results);
        });
    };
    
    
    
    if (answer.databaseInquiry === 'View all roles') {
        connection.query('SELECT * FROM roles', function (err, results) {
            console.log(results);
        });
    };

    if (answer.databaseInquiry === 'View all employees') {
        connection.query('SELECT * FROM employee', function (err, results) {
            console.log(results);
        });
    };

    if (answer.databaseInquiry === 'Add a department') {
        inquirer
        .prompt 
        connection.query('SELECT * FROM departments', function (err, results) {
            console.log(results);
        });
    };

    if (answer.databaseInquiry === 'Add a role') {
        connection.query('SELECT * FROM departments', function (err, results) {
            console.log(results);
        });
    };

};

const init () => {
    databaseInquiry()
        .then
        .catch((err) => console.error(err));
};

init();