const employees = [
  { name: "Alice", dept: "Tech", salary: 80000 },
  { name: "Bob", dept: "HR", salary: 50000 },
  { name: "Charlie", dept: "Tech", salary: 120000 },
  { name: "Diana", dept: "Tech", salary: 90000 },
];

// Use chaining to get an array containing only the names of employees in the "Tech" department who make more than $85,000.

// I need to filter out the people above 85k salary first, then i need to map it to array of name's
// In other way I can use reduce also and i can put both values into reduce{}

const seniorEmployees = employees
  .filter((employee) => employee.salary > 85000)
  .map((employee) => employee.name);
console.log(seniorEmployees);

const seniorEmployees1 = employees.reduce((acc, curr) => {
  if (curr.salary > 85000) {
    acc.push(curr.name);
  }
  return acc;
}, []);
console.log(seniorEmployees1);
