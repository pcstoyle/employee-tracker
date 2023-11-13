const inquirer = require('inquirer');

//connect db files
const connection = require('./db/connection');
// const databasePrompts = require('./db/index')


//Node prompting user to make table selection out of db  
const databaseInquiry = [
    {
        type: 'list',
        name: 'selection',
        choices: ["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee"],
        message: 'Please make a selection.'
    },
];

//results/follow up prompts based on intial selection 
const addDepartment = [
    {
        type: 'input',
        name: 'deptName',
        message: 'Enter the new departments name.',
    },
];

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


async function response(answer) {
    //if "view dept/role/emp" is selected
    if (answer.selection === 'View all departments') {
       viewDepartments();
    };

    if (answer.selection === 'View all roles') {
        viewRoles();
    };

    if (answer.selection === 'View all employees') {
        viewEmployees();
    };



    //if "add dept/role/emp" is selected
    if (answer.selection === 'Add a department') {
        inquirer
            .prompt(addDepartment)
            .then((answer) => {
                connection.promise().query("INSERT INTO department(name) VALUES (?)", answer.deptName).then(([response]) => {
                    if(response.affectedRows > 0) {
                        viewDepartments();
                    }
                    else {
                        console.error("Failed to add department");
                        init();
                    }
                })
            })
    };

    if (answer.selection === 'Add a role') {
        const [departments] = await connection.promise().query("SELECT * FROM department")
        const deptArr = departments.map(department => ({name: department.name, value: department.id}))
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
                choices: deptArr,
            }
        ]
        inquirer
            .prompt(addRole)
            .then((answer) => {
            const roleObj = {role: answer.role, salary: answer.salary, role: answer.roleDept};
            connection.promise().query("INSERT INTO role SET ?", roleObj).then(([response]) => {
                if(response.affectedRows > 0) {
                    viewRoles();
                }
                else {
                    console.error("Failed to add role");
                    init();
                }
            })
            })
    };

    if (answer.selection === 'Add an employee') {
        // const [departments] = await connection.promise().query
        // ("SELECT * FROM department")
        // const deptArr = departments.map(department => ({name: department.name, value: department.id}))
        const [roles] = await connection.promise().query("SELECT * FROM role")
        const roleArr = roles.map(role => ({name: role.role, value: role.id}))
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
                choices: roleArr,
            },
        ]
        inquirer
            .prompt(addEmp)
            .then((answer) => {
                const employeeObj = {first_name: answer.empFirstName, last_name: answer.empLastName, role_id: answer.empRole};
                connection.promise().query("INSERT INTO employee SET ?", employeeObj).then(([response]) => {
                    if(response.affectedRows > 0) {
                        viewEmployees();
                    }
                    else {
                        console.error("Failed to add employee");
                        init();
                    }
                })
            })
    };

    //if "update emp role" is selected 
    if (answer.selection === 'Update employee role') {
        inquirer
            .prompt(updateEmployee)
            .then((answer) => {

            })
    };
};

function viewDepartments() {
    connection.query('SELECT * FROM department', function (err, results) {
        console.table(results);
        init();
    });
}

function viewRoles() {
    connection.query('SELECT role.id, role.role, role.salary, department.name AS department FROM role LEFT JOIN department ON role.department=department.id;', function (err, results) {
        console.table(results);
        init();
    });
}

function viewEmployees() {
    connection.query('SELECT * FROM employee', function (err, results) {
        console.table(results);
        init();
    });
}

function init() {
    inquirer
        .prompt(databaseInquiry)
        .then((answer) => {
            response(answer);
        });
};

init();