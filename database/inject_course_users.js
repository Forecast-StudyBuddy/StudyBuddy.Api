let mysql= require('mysql')

let con = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: 'localmac',
    database: 'study_buddy_db'
})

let courses = [
    'CS 18000 Problem Solving And Object-Oriented Programming',
    'CS 182000 Foundations Of Computer Science',
    'CS 24000 Programming In C',
    'CS 25000 Computer Architecture',
    'CS 25100 Data Structures And Algorithms',
    'CS 25200 Systems Programming',
    'CS 30700 Software Engineering I'
]
let course_users = [
    [1, 'shi180@purdue.edu', 1, 'A'],
    [2, 'shi180@purdue.edu', 2, 'B'],
    [3, 'shi180@purdue.edu', 3, 'A'],
    [4, 'shi180@purdue.edu', 4, null],
    [5, 'shi180@purdue.edu', 5, null]
]
let insert_course_users = 'INSERT INTO course_user (id, user_id, course_id, course_grade) VALUES (?)'

con.connect()

course_users.forEach((course_user, index) => {
    con.query(insert_course_users, [course_user], (err, result) => {
        if(err) throw err
        console.log(`course_user ${course_user[0]} inserted`)
    })
})

con.end()
