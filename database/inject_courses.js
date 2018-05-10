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
let insert_course = 'INSERT INTO courses (course_name, id) VALUES (?)'

con.connect()

courses.forEach((course, index) => {
    con.query(insert_course, [[course, index]], (err, result) => {
        console.log(err)
        if(err) throw err
        console.log(`course ${course} inserted`)
        
    })
})

con.end()
