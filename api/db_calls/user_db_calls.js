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
    con.connect(err => {
        if(err) throw err
        let insert_user_sql= 'INSERT INTO users (name, email, password) VALUES ?'
        var user_values= [[name, email, password]]
        queryDB(insert_user_sql , user_values)
        callback()
    })
}

exports.fetch_user = email => {
    con.connect(err => {
        if(err) throw err
        let insert_user_sql= 'SELECT * FROM users WHERE email=?'
        queryDB(insert_user_sql , email)
        // callback()
    })
}