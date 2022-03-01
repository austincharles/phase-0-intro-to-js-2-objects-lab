const employee = {
    name: 'Sam',
    streetAddress: '11 Broadway'
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = {
        name: 'Sam',
        streetAddress: '11 Broadway'
    }
    return newEmployee;
};

function destructivelyUpdateEmployeeWithKeyAndValue(employee, streetAddress, value) {
    employee[streetAddress] = '12 Broadway';
    return employee;
};

function deleteFromEmployeeByKey(employee, name, value) {
    let newEmployee = {...employee};
    newEmployee[name] = undefined;
    return newEmployee;
};

function destructivelyDeleteFromEmployeeByKey(newEmployee, name, value) {
    employee[name] = undefined;
    return newEmployee;
};