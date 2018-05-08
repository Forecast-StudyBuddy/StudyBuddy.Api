let mysql= require('mysql')

let con = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: 'localmac',
    database: 'study_buddy_db'
})

con.connect(function(err){
    if(err) throw err
    console.log('Connected!')
    let user_table_sql = 'CREATE TABLE users (name VARCHAR(255), email VARCHAR(255) PRIMARY KEY, password VARCHAR(255))'
    con.query(user_table_sql, function(err, result){
        if(err) throw err
        console.log('table created')
    }) 
})
