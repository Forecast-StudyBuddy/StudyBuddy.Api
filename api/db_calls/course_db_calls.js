let mysql= require('mysql')

let con = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: 'localmac',
    database: 'study_buddy_db'
})

exports.fetch_courses_for_user = (email, callback) => {
    con.connect()
    let fetch_courses_sql = 'SELECT course_id FROM course_user WHERE user_id=? AND (course_grade=\'A\' OR course_grade=\'B\' OR course_grade IS NULL)'
    con.query(fetch_courses_sql, [email], (err, results) => {
        var courses = []
        let fetch_course_sql = 'SELECT * FROM courses WHERE '
        results.forEach(result => {

        })
        callback(err)
    })
    con.end()
}

exports.insert_helping_courses = (email, courses, callback) => {
    con.connect()
    let fetch_helping_courses_sql = 'SELECT '

    con.end()
}