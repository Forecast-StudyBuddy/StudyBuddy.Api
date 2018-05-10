const { accept_request, 
    create_request, 
    fetch_open_requests, 
    complete_request, 
    fetch_my_accepted_requests, 
    fetch_my_posted_requests} = require('../db_calls/request_db_calls')

// POST
// recieve a request when a student needs assistance on a course
exports.request_assistance = function (req, res) {
    const text = req.body.text
    const user_id = req.body.email
    const course_id = req.body.course_id
    const taker_id = null
    const complete = false
    create_request(text,user_id,course_id,taker_id,complete,err => {
        if(!!err) throw err
        res.sendStatus(200)
    })
}

// GET
// return all open request related to the user
exports.open_requests = function (req, res) {
    const email = req.body.email
    fetch_open_requests(email, (err, results) => {
        if(!!err) throw err
        res.send(results)
    })
}

// GET
// return an array of my submitted requests and an array of my accepted requests
exports.my_accepted_requests = function (req, res) {
    const email= req.body.email
    fetch_my_accepted_requests(email, (err, results) => {
        if(!!err){
            res.sendStatus(403)
            console.log(err)
            return
        }
        res.send(results)
    })
}
exports.my_posted_requests = function (req, res) {
    const email= req.body.email
    fetch_my_posted_requests(email, (err, results) => {
        if(!!err){
            res.sendStatus(403)
            console.log(err)
            return
        }
        res.send(results)
    })
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
    const email= req.body.email
    const request_id = req.body.request_id
    complete_request(request_id, email, err => {
        if(!!err) throw err
        res.sendStatus(200)
    })
}