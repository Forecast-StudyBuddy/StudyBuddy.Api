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
    // con.connect()
    let insert_user_sql= 'INSERT INTO users (name, email, password) VALUES (?)'
    con.query(insert_user_sql, [[name, email, password]], (err, result) => {
        callback(err)
    })
    // con.end()
}

exports.fetch_user = (email, callback) => {
    // con.connect(err => {
    //     if(err) throw err
    //     let insert_user_sql= 'SELECT * FROM users WHERE email=?'
    //     con.query(insert_user_sql, email, function(err, result){
    //         if(err) throw err
    //         callback(result)
    //     })
    // })

    let insert_user_sql= 'SELECT * FROM users WHERE email=?'
        con.query(insert_user_sql, email, function(err, result){
            if(err) throw err
            callback(result)
        })
}