// Teacher Interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // Allow any additional attributes
}

// Example usage of Teacher interface
const teacher1: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: true,
  location: 'London',
  contract: false, // Additional attribute
};

const teacher2: Teacher = {
  firstName: 'Jane',
  lastName: 'Smith',
  fullTimeEmployee: false,
  yearsOfExperience: 5,
  location: 'New York',
  specialty: 'Math', // Additional attribute
};

console.log(teacher1);
console.log(teacher2);

// Directors Interface (extends Teacher)
interface Directors extends Teacher {
  numberOfReports: number;
}

// Example usage of Directors interface
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

// PrintTeacher Function Interface
interface PrintTeacherFunction {
  (firstName: string, lastName: string): string;
}

// PrintTeacher implementation
const printTeacher: PrintTeacherFunction = (firstName: string, lastName: string): string => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

console.log(printTeacher("John", "Doe")); // Should print "J. Doe"

// StudentClass Interface and Class Implementation
interface StudentClassInterface {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

interface StudentConstructor {
  new(firstName: string, lastName: string): StudentClassInterface;
}

class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Example usage of StudentClass
const student = new StudentClass("John", "Doe");
console.log(student.displayName()); // Should print "John"
console.log(student.workOnHomework()); // Should print "Currently working"