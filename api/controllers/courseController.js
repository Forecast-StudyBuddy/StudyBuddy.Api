const { fetch_courses_for_user } = require('../db_calls/course_db_calls')

// GET
// return eligible courses for the student to help with
exports.user_courses = function (req, res) {
    const email = req.body.email
    fetch_courses_for_user(email, courses => {
        res.send(courses)
    })
}

// POST
// receive an array of courses the student would like to help
exports.assist_course = function (req, res) {
}