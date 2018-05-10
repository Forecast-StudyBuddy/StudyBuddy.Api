'use strict';

module.exports = function (app) {
    const userController = require('../controllers/userController');
    app.route('/api/createUser')
        .post(userController.create_user);
    app.route('/api/login')
        .post(userController.login)

    const courseController = require('../controllers/courseController')
    app.route('/api/userCourses')
        .post(courseController.user_courses)
    app.route('/api/currentCourses')
        .post(courseController.current_courses)

    const requestController = require('../controllers/requestController')
    app.route('/api/requestAssistance')
        .post(requestController.request_assistance)
    app.route('/api/openRequests')
        .post(requestController.open_requests)
    app.route('/api/acceptedRequests')
        .post(requestController.my_accepted_requests)
    app.route('/api/postedRequests')
        .post(requestController.my_posted_requests)
    app.route('/api/acceptRequest')
        .post(requestController.accept_request)
    app.route('/api/completeRequest')
        .post(requestController.complete_request)
}