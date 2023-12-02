const University = require("../model/universityModel"); // Import the Patient model
// model has the data definition for Student

class UniversityController {
    // createStudent function, adds a new student to the table
    static async createUni(
        universityID,
        name,
        rank
    ) {
        const newUni = new University(
            universityID,
            name,
            rank
        );
        await newUni.save();
        return newUni;
    }

    // calls on a function in model to get a student from an ID
    static async getUniByID(universityID) {
        return await University.getUniByID(universityID);
    }
}

module.exports = UniversityController;