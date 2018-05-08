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
    let course_helper_table_sql = 'CREATE TABLE course_helpers ( user_id VARCHAR(255), course_id VARCHAR(255))'
    con.query(course_helper_table_sql, function(err, result){
        if(err) throw err
        console.log('table created')
    })
})