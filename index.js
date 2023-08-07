class Student {
  constructor(firstName, lastName, birthYear, grades = [], attendance = []) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.grades = grades;
    this.attendance = new Array(25).fill(null);

    this.addGrades(grades);
    this.addAttendance(attendance);
  }

  getAge() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.birthYear;
  }

  getAverageGrade() {
    if (this.grades.length === 0) {
      return 0;
    }

    const totalGrades = this.grades.reduce((sum, grade) => sum + grade, 0);
    return totalGrades / this.grades.length;
  }

  getAverageAttendance() {
    const totalPresent = this.attendance.filter(item => item === true).length;
    return (totalPresent / this.attendance.length);
  }

  addGrade(grade) {
    this.grades.push(grade);
  }

  addGrades(grades) {
    for (const grade of grades) {
      this.addGrade(grade);
    }
  }

  addSingleAttendance(status) {
    const nullIndex = this.attendance.indexOf(null);
    if (nullIndex !== -1 && nullIndex < 25) {
      this.attendance[nullIndex] = status;
    }
  }

  addAttendance(attendance) {
    for (const status of attendance) {
      this.addSingleAttendance(status);
    }
  }

  summary() {
    const averageGrade = this.getAverageGrade();
    const averageAttendance = this.getAverageAttendance();

    if (averageGrade > 90 && averageAttendance > 0.9) {
      return "Excellent!";
    } else if (averageGrade > 90 || averageAttendance > 0.9) {
      return "Good, but could be better";
    } else {
      return "Slacker!";
    }
  }
}

const student1 = new Student("Olena", "Yurchenko", 2002, [80, 90, 70, 85], [true, true, true, true, false]);
const student2 = new Student("Maxim", "Kuzin", 2001, [95, 87, 92, 88]);
const student3 = new Student("Petro", "Ivanov", 2004, [98, 85, 92, 89], [true, false, true, false]);

console.log(`Student 1: ${student1.firstName} ${student1.lastName}`);
console.log(`Birth Year: ${student1.birthYear}`);
console.log(`Age: ${student1.getAge()} years`);
console.log(`Average Grade: ${student1.getAverageGrade()}`);
console.log(`Average Attendance: ${student1.getAverageAttendance()}`);
console.log(`Summary: ${student1.summary()}`);

console.log(`\nStudent 2: ${student2.firstName} ${student2.lastName}`);
console.log(`Birth Year: ${student2.birthYear}`);
console.log(`Age: ${student2.getAge()} years`);
console.log(`Average Grade: ${student2.getAverageGrade()}`);
console.log(`Average Attendance: ${student2.getAverageAttendance()}`);
console.log(`Summary: ${student2.summary()}`);

console.log(`\nStudent 3: ${student3.firstName} ${student3.lastName}`);
console.log(`Birth Year: ${student3.birthYear}`);
console.log(`Age: ${student3.getAge()} years`);
console.log(`Average Grade: ${student3.getAverageGrade()}`);
console.log(`Average Attendance: ${student3.getAverageAttendance()}`);
console.log(`Summary: ${student3.summary()}`);