// //Node prompting user to make table selection out of db  
function databaseInquiry () {} [
    {
        type: 'list',
        name: 'selection',
        choices: ["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee", "Update employee role", "Exit,"],
        message: 'Please make a selection.'
    },
];

//follow up prompts based on intial selection 
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


const userResponse = (answer) => {

    //if "view dept/role/emp" is selected
    if (databaseInquiry === 'View all departments') {
        connection.query('SELECT * FROM departments', function (err, results) {
            console.log(results);
        });
    };

    if (databaseInquiry === 'View all roles') {
        connection.query('SELECT * FROM roles', function (err, results) {
            console.log(results);
        });
    };

    if (databaseInquiry === 'View all employees') {
        connection.query('SELECT * FROM employee', function (err, results) {
            console.log(results);
        });
    };

    //if "add dept/role/emp" is selected
    if (databaseInquiry === 'Add a department') {
        inquirer
            .prompt(addDepartment)
            .then((answers) => {
            })
        connection.query('SELECT')
    };

    if (databaseInquiry === 'Add a role') {
        inquirer
            .prompt(addRole)
            .then((answers) => {
            })
    };

    if (databaseInquiry === 'Add a role') {
        inquirer
            .prompt(addEmp)
            .then((answer) => {
            })
    };

    //if "update emp role" is selected 
    if (databaseInquiry === 'Update employee role') {
        inquirer
            .prompt(updateEmployee)
            .then((answer) => {

            })

    };
};


function init() {

}

module.exports = 