const { accept_request } = require('../db_calls/request_db_calls')

// POST
// recieve a request when a student needs assistance on a course
exports.request_assistance = function (req, res) {
}

// GET
// return all open request related to the user
exports.open_requests = function (req, res) {
}

// GET
// return an array of my submitted requests and an array of my accepted requests
exports.my_requests = function (req, res) {
}

// POST
// receive an email and request id
exports.accept_request = (req, res) => {
    const email = req.body.email
    const request_id = req.body.requestId

    accept_request(email, request_id, err => {
        if (!!err) throw err
        res.sendStatus(200)
    })
}

// POST
// complete a request when assistance has been given
exports.complete_request = function (req, res) {
}