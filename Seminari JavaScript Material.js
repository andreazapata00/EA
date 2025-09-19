// una funció
function getWebDevNames(students) {
  return students
    .filter(student => student.course === "Web Development")
    .map(student => `${student.name} ${student.lastname}`);
}

// paràmetre d'entrada un array d'estudiants, semblant a https://github.com/rocmeseguer/EA-JS/blob/main/3-javascript-arrays/0-data.js
const students = [
  { name: "Jill", lastname: "Doe", age: 24, course: "Marketing" },
  { name: "John", lastname: "Doe", age: 22, course: "Web Development" },
  { name: "Jack", lastname: "Doe", age: 20, course: "Accounting" },
  { name: "Ryan Jhon", lastname: "Ray", age: 23, course: "Web Development" },
  { name: "Jane", lastname: "Doe", age: 20, course: "Financial Management" },
];

// sortida d'un array amb els estudiants del curs "Web Development"
const webDevNames = getWebDevNames(students);
console.log(webDevNames);