let mysql= require('mysql')

let con = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: 'localmac',
    database: 'study_buddy_db'
})


// POST
// create a user
exports.create_user = function(req, res) {

    // insert a new user in user table

}

// GET
// login
exports.login = function(req, res) {
    res.sendStatus(200)
}
