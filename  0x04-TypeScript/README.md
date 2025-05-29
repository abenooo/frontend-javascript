# frontend-javascript using ts

## Setup Instructions

1. Copy the following configuration files into the `task_0` directory:
   - `package.json`
   - `.eslintrc.js`
   - `tsconfig.json`
   - `webpack.config.js`

2. Create a `main.ts` file in the `task_0` directory with the following implementation:

```typescript
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

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
    location: "Los Angeles"
};

const studentsList: Student[] = [student1, student2];

// Create and render table
const table = document.createElement('table');
const tbody = document.createElement('tbody');

studentsList.forEach((student) => {
    const row = document.createElement('tr');
    const firstNameCell = document.createElement('td');
    const locationCell = document.createElement('td');

    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table);
```

## Requirements

- Webpack should return "No type errors found" when running
- All variables must use TypeScript types where possible
- The table should display the first name and location of each student
- The implementation should use Vanilla JavaScript for DOM manipulation

## Running the Project

1. Install dependencies:
```bash
npm install
```

2. Build the project:
```bash
npm run build
```

3. Start the development server:
```bash
npm start
```

## TypeScript Configuration

The project uses TypeScript for type safety and better development experience. The `tsconfig.json` file includes necessary configurations for the project.

## ESLint Configuration

ESLint is configured to ensure code quality and consistency. The `.eslintrc.js` file contains the rules and settings for the project.

## Webpack Configuration

Webpack is used for bundling the application. The `webpack.config.js` file includes the necessary configuration for TypeScript compilation and development server setup.
