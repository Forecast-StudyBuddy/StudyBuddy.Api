const { insert_user } = require('../db_calls/user_db_calls')

// POST
// create a user
exports.create_user = (req, res) => {

    // insert a new user in user table
    const name = req.body.name
    const email = req.body.email
    const password = req.body.password

   insert_user(name, email, password, () => res.sendStatus(200))
}

// GET
// login
exports.login = (req, res) => {
    res.sendStatus(200)
}
