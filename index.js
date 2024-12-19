// 1. Initialize the employee object
const employee = {
    name: "John Doe",
    streetAddress: "123 Main Street"
  };
  
  // 2. Non-destructively update an employee object
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return { ...employee, [key]: value }; // Creates a new object with the updated key-value pair
  }
  
  // 3. Destructively update an employee object
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value; // Directly updates the original employee object
    return employee;
  }
  
  // 4. Non-destructively delete a key from an employee object
  function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee }; // Creates a shallow copy of the employee object
    delete newEmployee[key]; // Deletes the key from the new object
    return newEmployee;
  }
  
  // 5. Destructively delete a key from an employee object
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]; // Directly deletes the key from the original object
    return employee;
  }
  