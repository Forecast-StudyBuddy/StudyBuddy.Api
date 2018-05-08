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
    let request_table_sql = 'CREATE TABLE requests ( text VARCHAR(255), id INT AUTO_INCREMENT PRIMARY KEY, user_id VARCHAR(255), course_id VARCHAR(255), taker_id VARCHAR(255), completed BOOLEAN )'
    con.query(request_table_sql, function(err, result){
        if(err) throw err
        console.log('table created')
    })
})