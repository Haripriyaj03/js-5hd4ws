// Import stylesheets
import './style.css';

// Write Javascript code!
const students = [
  {
    name: 'John',
    chemistryMarks: 80,
    biologyMarks: 90,
    dateOfBirth: '15-02-2002',
  },
  {
    name: 'Jane',
    chemistryMarks: 85,
    biologyMarks: 85,
    dateOfBirth: '10-04-2002',
  },
  {
    name: 'Alice',
    chemistryMarks: 90,
    biologyMarks: 85,
    dateOfBirth: '15-02-2002',
  },
];

const sortedStudents = sortStudents(students);
console.log(sortedStudents);

function sortStudents(students) {
  students.sort((a, b) => {
    // Rule 1: Sort by total marks in descending order
    if (a.chemistryMarks + a.biologyMarks > b.chemistryMarks + b.biologyMarks) {
      return -1;
    }
    if (a.chemistryMarks + a.biologyMarks < b.chemistryMarks + b.biologyMarks) {
      return 1;
    }

    // Rule 2: Sort by biology marks in descending order
    if (a.biologyMarks > b.biologyMarks) {
      return -1;
    }
    if (a.biologyMarks < b.biologyMarks) {
      return 1;
    }

    // Rule 3: Sort by date of birth in ascending order
    const [aDay, aMonth, aYear] = a.dateOfBirth.split('-');
    const [bDay, bMonth, bYear] = b.dateOfBirth.split('-');
    const aDate = new Date(aYear, aMonth - 1, aDay);
    const bDate = new Date(bYear, bMonth - 1, bDay);

    if (aDate > bDate) {
      return 1;
    }
    if (aDate < bDate) {
      return -1;
    }

    return 0;
  });

  return students;
}
