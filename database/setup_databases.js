let mysql= require('mysql')

let con = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: 'localmac'
})

// create database
con.query("CREATE DATABASE study_buddy_db", function (err, result) {
    if (!!err) throw err;
    console.log("Database created");

    con = mysql.createConnection({
        host:'localhost',
        user: 'root',
        password: 'localmac',
        database: 'study_buddy_db'
    })
    
    // create USERS table
    let user_table_sql = 'CREATE TABLE users (id VARCHAR(255) PRIMARY KEY, name VARCHAR(255), password VARCHAR(255))'
    con.query(user_table_sql, (err, result) => {
        if(!!err) throw err
        console.log('USERS table created')
    }) 
    
    // create COURSES table
    let courses_table_sql = 'CREATE TABLE courses (id VARCHAR(255) PRIMARY KEY, course_name VARCHAR(255))'
    con.query(courses_table_sql, (err, result) => {
        if(!!err) throw err
        console.log('COURSES table created')
    })
    
    // create COURSE_USER table
    let course_user_table_sql = 'CREATE TABLE course_user (id INT AUTO_INCREMENT PRIMARY KEY, user_id VARCHAR(255), course_id VARCHAR(255), course_grade VARCHAR(255))'
    con.query(course_user_table_sql, (err, result) => {
        if(!!err) throw err
        console.log('COURSE_USER table created')
    })
    
    // create REQUESTS table
    let request_table_sql = 'CREATE TABLE requests (id INT AUTO_INCREMENT PRIMARY KEY, user_id VARCHAR(255), course_id VARCHAR(255), taker_id VARCHAR(255), completed BOOLEAN, text VARCHAR(255))'
    con.query(request_table_sql, (err, result) => {
        if(!!err) throw err
        console.log('REQUESTS table created')
    })
})


