let mysql= require('mysql')

let con = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: 'localmac',
    database: 'study_buddy_db'
})

exports.accept_request = (email, request_id, callback) => {
    con.connect()
    let update_request = `UPDATE requests SET taker_id=${email} WHERE id=${request_id}`
    con.query(update_request, (err, result) => {
        callback(err)
    })
    con.end()
}
