const express = require("express");
const UniversityController = require("../controller/universityController");

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
            universityID,
            name,
            rank
        } = req.body;
        // getting the information about a student they want created
        const newUni = await UniversityController.createUni(
            universityID,
            name,
            rank
        );
        // creating that student and converting it into json formatting
        res.json(newUni);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// get method
/*  */

router.get("/:universityID", async (req, res) => {
    try {
        const { universityID } = req.params;
        const university = await UniversityController.getUniByID(universityID);
        if (university) {
            res.json(university);
        } else {
            res.status(404).json({ error: "Uni not found" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;