const express = require("express");
const ProfessorController = require("../controller/professorController");

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
            professorID,
            lName,
            fName,
            universityID
        } = req.body;
        // getting the information about a student they want created
        const newProfessor = await ProfessorController.createProfessor(
            professorID,
            lName,
            fName,
            universityID
        );
        // creating that student and converting it into json formatting
        res.json(newProfessor);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// get method
/*  */

router.get("/:professorID", async (req, res) => {
    try {
        const { profesorID } = req.params;
        const professor = await ProfessorController.getProfessorByID(profesorID);
        if (professor) {
            res.json(professor);
        } else {
            res.status(404).json({ error: "Professor not found" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;