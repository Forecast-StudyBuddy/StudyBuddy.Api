let mysql= require('mysql')

let con = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: 'localmac',
    database: 'study_buddy_db'
})

function queryDB(sql, values) {
    con.query(sql,[values], function(err, result){
        if(err) throw err
        console.log('table updated')
    })
}

exports.insert_user = (name, email, password, callback) => {
    let insert_user_sql= 'INSERT INTO users (name, id, password) VALUES (?)'
    con.query(insert_user_sql, [[name, email, password]], (err, result) => {
        callback(err)
    })
}

exports.fetch_user = (email, callback) => {
    let insert_user_sql= 'SELECT * FROM users WHERE id=?'
    con.query(insert_user_sql, email, function(err, result){
        if(err) throw err
        callback(result)
    })
}