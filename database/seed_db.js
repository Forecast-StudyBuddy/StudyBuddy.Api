let mysql= require('mysql')

let con = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: 'localmac',
    database: 'study_buddy_db'
})


con.connect(function(err) {
    if(err) throw err
    console.log('Connected!')
    insertRequests()
    insertUsers()
    courseUsers()
    courses()
    courseHelper()
})

function courseHelper(){
    let insert_course_helpers_sql= 'INSERT INTO course_helpers (course_id, user_id) VALUES ?'
    var course_helpers_values= [['Math101','abc@purdue.edu'],['CS123','1234@purdue.edu'],['CS101','456@purdue.edu'],['CS114','efg@purdue.edu'],['ENG176','jkl@purdue.edu']]
    queryDB(insert_course_helpers_sql , course_helpers_values)
}

function courses(){
    let insert_courses_sql= 'INSERT INTO courses (course_name) VALUES ?'
    var courses_values= [['Math101'],['CS123'],['CS101'],['CS114'],['ENG176']]
    queryDB(insert_courses_sql , courses_values)
}

function courseUsers(){
    let insert_course_users_sql= 'INSERT INTO course_user (course_grade, user_id, course_id) VALUES ?'
    var course_users_values= [['A','aditi.anand22@gmail.com','Math101']]
    queryDB(insert_course_users_sql , course_users_values)
}

function insertRequests(){
    let insert_request_sql= 'INSERT INTO requests (text, user_id, course_id, taker_id, completed) VALUES ?'
    var request_values= [['Need help with Math101','aditi.anand22@gmail.com','Math101', 'sun@purdue.edu', false]]
    queryDB(insert_request_sql , request_values)
}

function insertUsers(){
    let insert_user_sql= 'INSERT INTO users (name, email, password) VALUES ?'
    var user_values= [['Aditi Anand','aditi.anand22@gmail.com','123lala'], ['Sun zang','sun@purdue.edu','pass124']]
    queryDB(insert_user_sql , user_values)
}

function queryDB(sql, values) {
    con.query(sql,[values], function(err, result){
        if(err) throw err
        console.log('table updated')
    }) 
}