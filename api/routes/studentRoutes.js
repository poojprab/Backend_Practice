const express = require("express");
const StudentController = require("../controller/studentController");

const router = express.Router();

// post method
/* In the context of a POST request, the data sent by the client is
often included in the request body (req.body), and it typically contains
the information needed to create or update a resource on the server./*
 */
// the user wants something updated
router.post("/", async (req, res) => {
    try {
        const {
            lName,
            fName,
            major,
            year,
            universityID
        } = req.body;
        // getting the information about a student they want created
        const newStudent = await StudentController.createStudent(
            lName,
            fName,
            major,
            year,
            universityID
        );
        // creating that student and converting it into json formatting
        res.json(newStudent);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// get method
/*  */

router.get("/:studentID", async (req, res) => {
    try {
        const { studentID } = req.params;
        const student = await StudentController.getStudentByID(studentID);
        if (student) {
            res.json(student);
        } else {
            res.status(404).json({ error: "Student not found" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;