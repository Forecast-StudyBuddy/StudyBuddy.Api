const { fetch_courses_for_user, fetch_current_courses } = require('../db_calls/course_db_calls')

// POST
// return eligible courses for the student to help with
exports.user_courses = function (req, res) { // ✓
    const email = req.body.email
    fetch_courses_for_user(email, (err, results) => {
        if (!!err){
            res.sendStatus(403)
            console.log(err)
            return
        }
        res.send(results)
    })
}

// POST
// return an array of currently taking courses
exports.current_courses = (req, res) => { // ✓
    const email = req.body.email

    fetch_current_courses(email, (err, results) => {
        if (!!err){
            res.sendStatus(403)
            console.log(err)
            return
        }
        res.send(results)
    })
}