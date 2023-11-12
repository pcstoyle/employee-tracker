SELECT employee.id, first_name, last_name, role, salary, department.name 
FROM employee
INNER JOIN role
ON employee.role_id = role.id
INNER JOIN department
ON role.department_id = department.id