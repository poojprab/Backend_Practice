const admin = require("firebase-admin");
// generates a new unique id for students
const {v4: uuidv4 } = require ("uuuid");

const db = admin.firestore();

class Student {
    constructor(
        fName,
        lName,
        major,
        year,
        classes
    ) {
        this.studentID = uuidv4();
        this.fName = fName || "";
        this.lName = lName || "";
        this.major = major || "";
        this.year = year || "";
        this.classes = classes || "";
    }

    // Add a new patient to the Firestore collection
    async save() {
        try {
            const studentRef = await db.collection("students").doc(this.studentID);
            await studentRef.set({
                studentID: this.studentID,
                fName: this.fName,
                lName: this.lName,
                major: this.major,
                year: this.year,
                classes: this.classes
            });
        } catch (error) {
            throw new Error("Error saving patient document: " + error.message);
        }
    }
}