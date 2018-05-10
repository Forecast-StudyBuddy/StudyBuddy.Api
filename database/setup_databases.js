let mysql= require('mysql')

let con = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: 'localmac'
})

// create database
con.query("CREATE DATABASE IF NOT EXISTS study_buddy_db", function (err, result) {
    if (!!err) throw err;
    console.log("Database created");

    con = mysql.createConnection({
        host:'localhost',
        user: 'root',
        password: 'localmac',
        database: 'study_buddy_db'
    })
    
    // create USERS table
    let user_table_sql = 'CREATE TABLE IF NOT EXISTS users (name VARCHAR(255), id VARCHAR(255) PRIMARY KEY, password VARCHAR(255))'
    con.query(user_table_sql, (err, result) => {
        if(!!err) throw err
        console.log('USERS table created')
    }) 
    
    // create COURSES table
    let courses_table_sql = 'CREATE TABLE IF NOT EXISTS courses (course_name VARCHAR(255), id VARCHAR(255) PRIMARY KEY)'
    con.query(courses_table_sql, (err, result) => {
        if(!!err) throw err
        console.log('COURSES table created')
    })
    
    // create COURSE_USER table
    let course_user_table_sql = 'CREATE TABLE IF NOT EXISTS course_user (course_grade VARCHAR(255), id INT AUTO_INCREMENT PRIMARY KEY, user_id VARCHAR(255), course_id VARCHAR(255) )'
    con.query(course_user_table_sql, (err, result) => {
        if(!!err) throw err
        console.log('COURSE_USER table created')
    })
    
    // create REQUESTS table
    let request_table_sql = 'CREATE TABLE IF NOT EXISTS requests ( text VARCHAR(255), id INT AUTO_INCREMENT PRIMARY KEY, user_id VARCHAR(255), course_id VARCHAR(255), taker_id VARCHAR(255), completed BOOLEAN )'
    con.query(request_table_sql, (err, result) => {
        if(!!err) throw err
        console.log('REQUESTS table created')
    })
})


