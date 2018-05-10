let mysql= require('mysql')

let con = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: 'localmac',
    database: 'study_buddy_db'
})

con.connect(err => {
    if(!!err) throw err

    insertUsers()
<<<<<<< HEAD
    courseUsers()
    courses()
})

function courses(){
    let insert_courses_sql= 'INSERT INTO courses (id, course_name) VALUES ?'
    var courses_values= [['Math101','Introduction to Calculus'],['CS123','Introduction to Computer Science'],['CS101', 'Object Oriented Programming'],['CS114','Operating System'],['ENG176', 'Introduction to English']]
=======
    insertCourses()
    insertCourseUsers()
    insertRequests()
})

insertUsers = () => {
    let insert_user_sql= 'INSERT INTO users (name, id, password) VALUES ?'
    var user_values= [
        ['Aditi Anand','aditi.anand22@gmail.com','123lala'], 
        ['Darrell Shi','shi180@purdue.edu','1234'],
        ['Student 1','test1@purdue.edu','1234'],
        ['Student 2','test2@purdue.edu','1234'],
        ['Student 3','test3@purdue.edu','1234'],
        ['Student 4','test4@purdue.edu','1234'],
        ['Student 5','test5@purdue.edu','1234'],
    ]
    queryDB(insert_user_sql , user_values)
}

insertCourses = () => {
    let insert_courses_sql= 'INSERT INTO courses (id, course_name) VALUES ?'
    var courses_values= [
        ['MA 16100', 'Plane Analytic Geometry And Calculus I'],
        ['ENGL 10600', 'First-Year Composition'],
        ['CS 18000', 'Problem Solving And Object-Oriented Programming'],
        ['ECON 25200', 'Macroeconomics'],
        ['STAT 35000', 'Introduction To Statistics'],
    ]
>>>>>>> feature/seed_db
    queryDB(insert_courses_sql , courses_values)
}

insertCourseUsers = () => {
    let insert_course_users_sql= 'INSERT INTO course_user (user_id, course_id, course_grade) VALUES ?'
    var course_users_values= [
        ['aditi.anand22@gmail.com', 'MA 16100', 'C'],
        ['aditi.anand22@gmail.com', 'ENGL 10600', 'A'],
        ['aditi.anand22@gmail.com', 'CS 18000', 'A'],
        ['aditi.anand22@gmail.com', 'ECON 25200', null],
        ['aditi.anand22@gmail.com', 'STAT 35000', null],
        ['shi180@purdue.edu', 'MA 16100', 'A'],
        ['shi180@purdue.edu', 'ENGL 10600', 'C'],
        ['shi180@purdue.edu', 'CS 18000', 'A'],
        ['shi180@purdue.edu', 'ECON 25200', null],
        ['shi180@purdue.edu', 'STAT 35000', null],
        ['test1@purdue.edu', 'MA 16100', null],
        ['test1@purdue.edu', 'STAT 35000', null],
        ['test2@purdue.edu', 'CS 18000', null],
        ['test3@purdue.edu', 'CS 18000', null],
        ['test3@purdue.edu', 'MA 16100', null],
        ['test3@purdue.edu', 'ECON 25200', null],
        ['test4@purdue.edu', 'CS 18000', null],
        ['test4@purdue.edu', 'ENGL 10600', null],
        ['test5@purdue.edu', 'CS 18000', null]
    ]
    queryDB(insert_course_users_sql , course_users_values)
}

insertRequests = () => {
    let insert_request_sql= 'INSERT INTO requests (user_id, course_id, taker_id, completed, text) VALUES ?'
    var request_values= [
        ['test1@purdue.edu', 'MA 16100', null, false, 'I need help'],
        ['test3@purdue.edu', 'MA 16100', null, false, 'I need help'],
        ['test4@purdue.edu', 'ENGL 10600', null, false, 'I need help'],
        ['test2@purdue.edu', 'CS 18000', null, false, 'I need help'],
        ['test3@purdue.edu', 'CS 18000', null, false, 'I need help'],
        ['test4@purdue.edu', 'CS 18000', null, false, 'I need help'],
        ['test5@purdue.edu', 'CS 18000', null, false, 'I need help'],
        ['test3@purdue.edu', 'ECON 25200', null, false, 'I need help'],
        ['test1@purdue.edu', 'STAT 35000', null, false, 'I need help']
    ]
    queryDB(insert_request_sql , request_values)
}

<<<<<<< HEAD
function insertUsers(){
    let insert_user_sql= 'INSERT INTO users (name, id, password) VALUES ?'
    var user_values= [['Aditi Anand','aditi.anand22@gmail.com','123lala'], ['Sun zang','sun@purdue.edu','pass124']]
    queryDB(insert_user_sql , user_values)
}

=======
>>>>>>> feature/seed_db
function queryDB(sql, values) {
    con.query(sql,[values], function(err, result){
        if(err) throw err
        console.log('table updated')
    }) 
}