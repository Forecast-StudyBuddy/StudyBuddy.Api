let mysql= require('mysql')

let con = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: 'localmac',
    database: 'study_buddy_db'
})

exports.fetch_courses_for_user = (email, callback) => {
    let fetch_course_ids_sql = `SELECT course_id FROM course_user WHERE user_id=\"${email}\" AND (course_grade=\'A\' OR course_grade=\'B\' OR course_grade IS NULL)`
    let fetch_courses_sql = `SELECT id, course_name FROM courses WHERE id IN (${fetch_course_ids_sql})`

    con.query(fetch_courses_sql, (err, results) => {        
        callback(err, results)
    })
}

exports.fetch_current_courses = (email, callback) => {    
    let fetch_current_courses_sql = `SELECT id, course_name FROM courses WHERE id IN (SELECT course_id FROM course_user WHERE user_id=\"${email}\" AND course_grade IS NULL)`
    con.query(fetch_current_courses_sql, (err, results) => {
        callback(err, results)
    })
}