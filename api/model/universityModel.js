const admin = require("firebase-admin");
// generates a new unique id for students
const {v4: uuidv4 } = require ("uuuid");

// establishes the database as firebase's firestore
const db = admin.firestore();

// creates a Student Object
class University {
    // fields for Student Object
    constructor(
        universityID,
        name,
        rank
    ) {
        // give student ID a unique identifier/code
        this.universityID = uuidv4();
        // initialize everything to a value of ""
        this.name = name || "";
        this.rank = rank || "";
    }

    // Add a new student to the Firestore collection: "save" them into the db
    async save() {
        try {
            // Does this assume that the student ID is already in the database?
            // Then it sets the rest of the fields to this, in that studentID
            const uniRef = await db.collection("university").doc(this.universityID);
            await uniRef.set({
                universityID: this.universityID,
                name: this.name,
                rank: this.rank
            });
        } catch (error) {
            throw new Error("Error saving student document: " + error.message);
        }
    }

    // Fetch a patient by their patientID from the Firestore collection
    static async getUniByID(universityID) {
        try {
            // creates a reference to the studentID used
            const uniRef = await db.collection("university").doc(universityID);
            // contains information about whether the document exists, and if it does, the data associated with the studentID
            const uniSnapshot = await uniRef.get();

            if (uniSnapshot.exists) {
                //getting the data
                const uniData = uniSnapshot.data();
                return new University(
                    uniData.universityID,
                    uniData.name,
                    uniData.rank
                );
            } else {
                return null; // Student not found
            }
        } catch (error) {
            throw new Error("Error fetching uni document: " + error.message);
        }
    }

}

// ask sowri what this means
module.exports = University;