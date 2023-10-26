// const inquirer = require('inquirer');

// const db = mysql.createConnection (
//     {
//       host: '127.0.0.1',
//       // MySQL username,
//       user: 'root',
//       // TODO: Add MySQL password here
//       password: 'password',
//       database: 'employees_db;'
//     },
//     console.log(`Connected to the employees_db; database.`)
//   );

// const databaseInquiry = () => {
//     return inquirer.prompt ([
//         {
//             type: 'list',
//             name: 'selection',
//             choices:["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee", "Update employee role"], 
//             message: 'Please make a selection.'
//         }
//     ]);
// }