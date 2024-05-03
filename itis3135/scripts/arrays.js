const employees = [];
const salaries = [];

function focusOnNameField() {
    const nameInput = document.getElementById('name');
    nameInput.focus();
}

window.addEventListener('load', focusOnNameField);

function addSalary() {
    const nameInput = document.getElementById('name');
    const salaryInput = document.getElementById('salary');

    const name = nameInput.value.trim();
    const salary = parseFloat(salaryInput.value.trim());

    if (name === '' || isNaN(salary)) {
        alert('Please provide a valid name and salary.');
        return;
    }

    employees.push(name);
    salaries.push(salary);

    nameInput.value = '';
    salaryInput.value = '';

    alert(`Added ${name} with a salary of $${salary}.`);
    populateDropdown();
    focusOnNameField();
}

function populateDropdown() {
    const dropdown = document.getElementById('employeeDropdown');
    dropdown.innerHTML = '';

    employees.forEach((employee, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = employee;
        dropdown.appendChild(option);
    });
}

function modifySalary() {
    const dropdown = document.getElementById('employeeDropdown');
    const selectedIndex = dropdown.selectedIndex;

    if (selectedIndex < 0) {
        alert('No employee selected.');
        return;
    }

    const newSalaryInput = document.getElementById('newSalary');
    const newSalary = parseFloat(newSalaryInput.value.trim());

    if (isNaN(newSalary)) {
        alert('Please enter a valid new salary.');
        return;
    }

    salaries[selectedIndex] = newSalary;
    alert(`Updated salary for ${employees[selectedIndex]} to $${newSalary}.`);

    newSalaryInput.value = '';
}

function displayResults() {
    if (salaries.length === 0) {
        alert('No salary data available.');
        return;
    }

    const totalSalaries = salaries.reduce((sum, salary) => sum + salary, 0);
    const avgSalary = totalSalaries / salaries.length;
    const maxSalary = Math.max(...salaries);

    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `
        <h3>Salary Results</h3>
        <p>Average Salary: $${avgSalary.toFixed(2)}</p>
        <p>Highest Salary: $${maxSalary.toFixed(2)}</p>
    `;
}

function displaySalary() {
    const table = document.getElementById('results-table');
    table.innerHTML = '';

    const headerRow = table.insertRow();
    headerRow.insertCell().textContent = 'Employee Name';
    headerRow.insertCell().textContent = 'Salary';

    employees.forEach((employee, index) => {
        const row = table.insertRow();
        row.insertCell().textContent = employee;
        row.insertCell().textContent = `$${salaries[index].toFixed(2)}`;
    });
}
