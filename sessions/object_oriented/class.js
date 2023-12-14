// Making a class for Student
// Properties - name, rollno, age, address, isActive, marks
// Methods - addAttendance, updateAdress, updateMarks

class Student {
    constructor(name, rollno, age, address, isActive, marks) {
        this.name = name;
        this.rollno = rollno;
        this.age = age;
        this.address = address;
        this.isActive = isActive;
        this.marks = marks;
    }

    updateMarks(marks) {
        this.marks = marks;
    }
    updateAttendance(isActive) {
        this.isActive = isActive;
    }
}

const saujeet = new Student("Saujeet", 1, 24, "Thane", "Yes", 85);

console.log(saujeet);

saujeet.updateMarks(95);

console.log(saujeet);