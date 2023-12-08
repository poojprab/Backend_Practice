const admin = require("firebase-admin");
// generates a new unique id for students
const {v4: uuidv4 } = require ("uuuid");

// establishes the database as firebase's firestore
const db = admin.firestore();

// creates a Student Object
class Student {
    // fields for Student Object
    constructor(
        fName,
        lName,
        major,
        year,
        universityID
    ) {
        // give student ID a unique identifier/code
        this.studentID = uuidv4();
        // initialize everything to a value of ""
        this.fName = fName || "";
        this.lName = lName || "";
        this.major = major || "";
        this.year = year || "";
        this.universityID = universityID || "";
    }

    // Add a new student to the Firestore collection: "save" them into the db
    async save() {
        try {
            // Does this assume that the student ID is already in the database?
            // Then it sets the rest of the fields to this, in that studentID
            const studentRef = await db.collection("students").doc(this.studentID);
            await studentRef.set({
                studentID: this.studentID,
                fName: this.fName,
                lName: this.lName,
                major: this.major,
                year: this.year,
                universityID: this.universityID
            });
        } catch (error) {
            throw new Error("Error saving student document: " + error.message);
        }
    }

    // Fetch a patient by their patientID from the Firestore collection
    static async getStudentByID(studentID) {
        try {
            // creates a reference to the studentID used
            const studentRef = await db.collection("students").doc(studentID);
            // contains information about whether the document exists, and if it does, the data associated with the studentID
            const studentSnapshot = await studentRef.get();

            if (studentSnapshot.exists) {
                //getting the data
                const studentData = studentSnapshot.data();
                return new Student(
                    studentData.fName,
                    studentData.lName,
                    studentData.major,
                    studentData.year,
                    studentData.universityID
                );
            } else {
                return null; // Student not found
            }
        } catch (error) {
            throw new Error("Error fetching student document: " + error.message);
        }
    }

}

// ask sowri what this means
module.exports = Student;