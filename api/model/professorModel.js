const admin = require("firebase-admin");
// generates a new unique id for students
const {v4: uuidv4 } = require ("uuuid");

// establishes the database as firebase's firestore
const db = admin.firestore();

// creates a Student Object
class Professor {
    // fields for Student Object
    constructor(
        fName,
        lName,
        universityID
    ) {
        // give student ID a unique identifier/code
        this.professorID = uuidv4();
        // initialize everything to a value of ""
        this.fName = fName || "";
        this.lName = lName || "";
        this.universityID = universityID || "";
    }

    // Add a new student to the Firestore collection: "save" them into the db
    async save() {
        try {
            // Does this assume that the student ID is already in the database?
            // Then it sets the rest of the fields to this, in that studentID
            const profRef = await db.collection("professors").doc(this.professorID);
            await profRef.set({
                professorID: this.professorID,
                fName: this.fName,
                lName: this.lName,
                universityID: this.universityID
            });
        } catch (error) {
            throw new Error("Error saving professor document: " + error.message);
        }
    }

    // Fetch a patient by their patientID from the Firestore collection
    static async getProfessorByID(professorID) {
        try {
            // creates a reference to the studentID used
            const profRef = await db.collection("professors").doc(professorID);
            // contains information about whether the document exists, and if it does, the data associated with the studentID
            const profSnapshot = await profRef.get();

            if (profSnapshot.exists) {
                //getting the data
                const profData = profSnapshot.data();
                return new Professor(
                    profData.fName,
                    profData.lName,
                    profData.universityID
                );
            } else {
                return null; // Student not found
            }
        } catch (error) {
            throw new Error("Error fetching professor document: " + error.message);
        }
    }

}

// ask sowri what this means
module.exports = Professor;