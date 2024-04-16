// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function () {
    const employees = [];
    while (true) {
        let firstName = prompt("Enter the first name of the employee or cancel to finish:");
        if (firstName === null) break; // Exit the loop if user cancelled

        let lastName = prompt("Enter the last name of the employee:");
        if (lastName === null) break; // Exit the loop if user cancelled

        let salaryString = prompt("Enter the salary of the employee (should be a number):");
        if (salaryString === null) break; // Exit the loop if user cancelled

        let salary = Number(salaryString);

        // If the salary isn't a number, default to $0
        if (isNaN(salary)) {
            salary = 0;
        }

        // Create an object for each employee and push to the employees array
        employees.push({
            firstName,
            lastName,
            salary,
        });
    }

    return employees;
}

// Display the average salary
const displayAverageSalary = function (employeesArray) {
    if (employeesArray.length === 0) {
        console.log("No employees to calculate average salary");
        return;
    }

    let sumSalary = 0;

    for (let i = 0; i < employeesArray.length; i++) {
        sumSalary += employeesArray[i].salary;
    }

    let averageSalary = parseFloat((sumSalary / employeesArray.length).toFixed(2));

    console.log(`The average salary between our ${employeesArray.length} employee(s) is $${averageSalary}`);
};

// Select a random employee
const getRandomEmployee = function (employeesArray) {
    if (employeesArray.length === 0) {
        console.log("No employees available");
        return;
    }

    let randomIndex = Math.floor(Math.random() * employeesArray.length);

    let randomEmployee = employeesArray[randomIndex];

    console.log(`Congratulations ${randomEmployee.firstName} ${randomEmployee.lastName}! You have been randomly selected for an award. Keep up the great work!`);
};

/*
    ====================
    STARTER CODE
    Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
    // Get the employee table
    const employeeTable = document.querySelector('#employee-table');

    // Clear the employee table
    employeeTable.innerHTML = '';

    // Loop through the employee data and create a row for each employee
    for (let i = 0; i < employeesArray.length; i++) {
        const currentEmployee = employeesArray[i];

        const newTableRow = document.createElement("tr");

        const firstNameCell = document.createElement("td");
        firstNameCell.textContent = currentEmployee.firstName;
        newTableRow.append(firstNameCell);

        const lastNameCell = document.createElement("td");
        lastNameCell.textContent = currentEmployee.lastName;
        newTableRow.append(lastNameCell);

        const salaryCell = document.createElement("td");
        // Format the salary as currency
        salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
        });

        newTableRow.append(salaryCell);

        employeeTable.append(newTableRow);
    }
}

const trackEmployeeData = function () {
    const employees = collectEmployees();

    console.table(employees);

    displayAverageSalary(employees);

    console.log('==============================');

    getRandomEmployee(employees);

    employees.sort(function (a, b) {
        if (a.lastName < b.lastName) {
            return -1;
        } else {
            return 1;
        }
    });

    displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
