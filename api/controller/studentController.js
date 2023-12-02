const Student = require("../model/studentModel"); // Import the Patient model
// model has the data definition for STudent

class StudentController {
    // createStudent function, adds a new student to the table
    static async createStudent(
        studentID,
        lName,
        fName,
        major,
        year,
        universityID
    ) {
        const newStudent = new Student(
            studentID,
            lName,
            fName,
            major,
            year,
            universityID
        );
        await newStudent.save();
        return newStudent;
    }

    // calls on a function in model to get a student from an ID
    static async getStudentByID(studentID) {
        return await Student.getStudentByID(studentID);
    }
}

module.exports = StudentController;