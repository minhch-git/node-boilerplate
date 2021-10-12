const express = require('express');
// const auth = require('../../middlewares/auth');
// const validate = require('../../middlewares/validate');
// const userValidation = require('../../validations/user.validation');
const studentController = require('../../controllers/student.controller');

const router = express.Router();
//students/
router.route('/').post(studentController.createStudent).get(studentController.getStudents);

router
  .route('/:studentId')
  .get(studentController.getStudent)
  .patch(studentController.updateStudent)
  .delete(studentController.deleteStudent);

// router
//   .route('/')
//   .post(validate(userValidation.createUser), userController.createUser)
//   .get(validate(userValidation.getUsers), userController.getUsers);

// router
//   .route('/:userId')
//   .get(validate(userValidation.getUser), userController.getUser)
//   .patch(validate(userValidation.updateUser), userController.updateUser)
//   .delete(validate(userValidation.deleteUser), userController.deleteUser);

module.exports = router;
