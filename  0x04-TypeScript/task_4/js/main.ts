/// <reference path="subjects/Teacher.ts" />
/// <reference path="subjects/Subject.ts" />
/// <reference path="subjects/Cpp.ts" />
/// <reference path="subjects/React.ts" />
/// <reference path="subjects/Java.ts" />

// Export constants for each subject
export const cpp = new Subjects.Cpp();
export const java = new Subjects.Java();
export const react = new Subjects.React();

// Create and export a Teacher with experience teaching C
export const cTeacher: Subjects.Teacher = {
  firstName: "John",
  lastName: "Doe",
  experienceTeachingC: 10
};

// For Cpp subject
console.log("C++");
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// For Java subject
console.log("Java");
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// For React subject
console.log("React");
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());