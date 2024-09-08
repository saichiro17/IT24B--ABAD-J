class Employee {
    constructor(name, position, salary) {
      this.name= name;
      this.position = position;
      this.salary = salary;
    }
  
    // Method to display employee details
    displayInfo() {
      console.log(`Employee: ${this.name}, Position: ${this.position}, Salary: $${this.salary}`);
    }
  
    // Method to give a raise
    giveRaise(amount) {
      this.salary += amount;
      console.log(`${this.name} got a raise! New salary: $${this.salary}`);
    }
  }
  
  // Class definition for Company
  class Company {
    constructor(name) {
      this.name = name;
      this.employees = [];  // Array to store employees
    }
  
    // Method to add an employee
    addEmployee(employee) {
      this.employees.push(employee);
      console.log(`${employee.name} has been added to ${this.name}.`);
    }
  
    // Method to list all employees
    listEmployees() {
      console.log(`Employees at ${this.name}:`);
      this.employees.forEach(emp => emp.displayInfo());
    }
  }
  
  // Creating company object
  const myCompany = new Company('Tech Corp');
  
  // Creating employee objects
  const emp1 = new Employee('Brylle Abad', 'Software Engineer', 60000);
  const emp2 = new Employee('Harold Balabat', 'Product Manager', 80000);
  
  // Adding employees to the company
  myCompany.addEmployee(emp1);
  myCompany.addEmployee(emp2);
  
  // Listing all employees
  myCompany.listEmployees();
  
  // Giving a raise to an employee
  emp1.giveRaise(5000);
  emp1.displayInfo();
  


