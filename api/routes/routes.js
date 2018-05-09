'use strict';

module.exports = function (app) {
    const userController = require('../controllers/userController');
    app.route('/api/createUser')
        .post(userController.create_user);
    app.route('/api/login')
        .post(userController.login)

    const courseController = require('../controllers/courseController')
    app.route('/api/userCourses')
        .get(courseController.user_courses)
    app.route('/api/assistCourse')
        .post(courseController.assist_course)

    const requestController = require('../controllers/requestController')
    app.route('/api/requestAssistance')
        .post(requestController.request_assistance)
    app.route('/api/openRequests')
        .get(requestController.open_requests)
    app.route('/api/myRequests')
        .get(requestController.my_requests)
    app.route('/api/completeRequest')
        .post(requestController.complete_request)
}