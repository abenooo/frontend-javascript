// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two student objects
const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "New York"
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 22,
  location: "San Francisco"
};

// Create an array of students
const studentsList: Array<Student> = [student1, student2];

// Function to render the table
const renderTable = (students: Array<Student>): void => {
  // Create table element
  const table = document.createElement('table');
  const tableBody = document.createElement('tbody');
  
  // Create header row
  const headerRow = document.createElement('tr');
  const firstNameHeader = document.createElement('th');
  const locationHeader = document.createElement('th');
  
  firstNameHeader.textContent = 'First Name';
  locationHeader.textContent = 'Location';
  
  headerRow.appendChild(firstNameHeader);
  headerRow.appendChild(locationHeader);
  tableBody.appendChild(headerRow);
  
  // Create a row for each student
  students.forEach((student) => {
    const row = document.createElement('tr');
    
    const firstNameCell = document.createElement('td');
    const locationCell = document.createElement('td');
    
    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
    
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    tableBody.appendChild(row);
  });
  
  table.appendChild(tableBody);
  document.body.appendChild(table);
};

// Render the table with student data
renderTable(studentsList);