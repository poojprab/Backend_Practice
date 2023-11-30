# Backend_Practice
## Notes
## Firebase
### - Firebase is a comprehensive mobile and web application development platform offered by Google. 
###   It provides a set of tools and services to help developers build and scale applications more easily.
###   We are using it for cloud storage of databases
### - Firebase uses NOSQL which makes use of Collections and Documents as opposed to Tables and Data
##### - uses JSON-like Querying Language
##### - Collection -> Entity
##### - Document -> One common unit of data 
##### - The fields of the JSON document are the tuples in the table, but NOSQL doesn't require for the structure to be the same
##### - so you can have a different structure for each data but they will be related under the collection name
##### - If a field is NULL, you just wouldn't include it
Example pseudo-code to enforce relationship in application code
function createStudent(studentData) {
if (!studentData.universityId) {
throw new Error("A student must be associated with a university.");
}
// Perform the actual document creation in the database
}*/