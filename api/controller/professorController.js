const Professor = require("../model/professorModel"); // Import the Patient model
// model has the data definition for STudent

class ProfessorController {
    // createStudent function, adds a new student to the table
    static async createProfessor(
        professorID,
        lName,
        fName,
        universityID
    ) {
        const newProfessor = new Professor(
            professorID,
            lName,
            fName,
            universityID
        );
        await newProfessor.save();
        return newProfessor;
    }

    // calls on a function in model to get a student from an ID
    static async getProfessorByID(professorID) {
        return await Professor.getProfessorByID(professorID);
    }
}

module.exports = ProfessorController;