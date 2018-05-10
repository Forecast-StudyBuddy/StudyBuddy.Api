const { insert_user, fetch_user } = require('../db_calls/user_db_calls')

// POST
// create a user
exports.create_user = (req, res) => {

    // insert a new user in user table
    const name = req.body.name
    const email = req.body.email
    const password = req.body.password

   insert_user(name, email, password, err => {
       if (err) {
        res.sendStatus(403)
        return
       }
       res.sendStatus(200)
   })
}

// POST
// login
exports.login = (req, res) => {
    const email = req.body.email
    const password = req.body.password

    fetch_user(email, result => {
        if (!!result) {
            const user = result[0]
            if (user.password === password) {
                res.send(result[0].email)
                return
            }
        }
        res.sendStatus(500)
    })
}
