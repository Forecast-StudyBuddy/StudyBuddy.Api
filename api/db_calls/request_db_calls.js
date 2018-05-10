let mysql= require('mysql')

let con = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: 'localmac',
    database: 'study_buddy_db'
})

exports.create_request = (text, user_id, course_id, taker_id, completed, callback) => {
    con.connect(err => {if(err) throw err})
        let insert_request_sql = 'INSERT INTO requests (text, user_id, course_id, taker_id, completed) VALUES ?'
        var request_values = [[text, user_id, course_id, taker_id, completed]]
        con.query(insert_request_sql,[request_values], function(err, result){
            callback(err, results)
        })
        con.end()
}

exports.fetch_open_requests = (email, callback) => {
    con.connect(err => {if(err) throw err})
        let fetch_all_user_courses = `SELECT course_id FROM course_user WHERE user_id=\"${email}\" AND (course_grade=\'A\' OR course_grade=\'B\' OR course_grade IS NULL)`
        let fetch_request_sql= `SELECT * FROM requests WHERE taker_id IS null AND course_id IN (${fetch_all_user_courses})`
        con.query(fetch_request_sql, function(err, result){
            callback(err, results)
        })
        con.end()
    
}
exports.fetch_my_accepted_requests= (email, callback )=> {
    con.connect(err => {if(err) throw err })
        let insert_user_sql= 'SELECT * FROM requests WHERE taker_id=?'
        con.query(insert_request_sql,[request_values], function(err, result){
            callback(err, results)
        })
        con.end()
    
}
exports.fetch_my_posted_requests = (email, callback) => {
    con.connect(err => {if(err) throw err })
        let insert_user_sql= `SELECT * FROM users WHERE email=${email}`
        con.query(insert_request_sql, function(err, result){
            callback(err, results)
        })
        con.end()  
}
exports.complete_request = (request_id, email, callback )=> {
    con.connect(err => {if(err) throw err })
        let insert_user_sql= `UPDATE requests SET completed=${true} WHERE id=${request_id} AND user_id=${email}`
        con.query(insert_request_sql, function(err, result){
            callback(err, results)
        })
        con.end()  
}
exports.accept_request = (email, request_id, callback) => {
    con.connect()
    let update_request = `UPDATE requests SET taker_id=${email} WHERE id=${request_id}`
    con.query(update_request, (err, result) => {
        callback(err,results)
    })
    con.end()
}