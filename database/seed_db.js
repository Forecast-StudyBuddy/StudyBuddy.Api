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
    insertCourses()
    insertCourseUsers()
    insertRequests()
})

insertUsers = () => {
    let insert_user_sql= 'INSERT INTO users (name, email, password) VALUES ?'
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
    let insert_courses_sql= 'INSERT INTO courses (course_name) VALUES ?'
    var courses_values= [
        ['MA 16100 - Plane Analytic Geometry And Calculus I'],
        ['ENGL 10600 - First-Year Composition'],
        ['CS 18000 - Problem Solving And Object-Oriented Programming'],
        ['ECON 25200 - Macroeconomics'],
        ['STAT 35000 - Introduction To Statistics'],
    ]
    queryDB(insert_courses_sql , courses_values)
}

insertCourseUsers = () => {
    let insert_course_users_sql= 'INSERT INTO course_user (course_grade, user_id, course_id) VALUES ?'
    var course_users_values= [['A','aditi.anand22@gmail.com','Math101']]
    queryDB(insert_course_users_sql , course_users_values)
}

insertRequests = () => {
    let insert_request_sql= 'INSERT INTO requests (text, user_id, course_id, taker_id, completed) VALUES ?'
    var request_values= [['Need help with Math101','aditi.anand22@gmail.com','Math101', 'sun@purdue.edu', false]]
    queryDB(insert_request_sql , request_values)
}

function queryDB(sql, values) {
    con.query(sql,[values], function(err, result){
        if(err) throw err
        console.log('table updated')
    }) 
}