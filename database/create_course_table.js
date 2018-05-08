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
    let course_table_sql = 'CREATE TABLE courses (course_name VARCHAR(255), id INT AUTO_INCREMENT PRIMARY KEY)'
    con.query(course_table_sql, function(err, result){
        if(err) throw err
        console.log('table created')
    })
})