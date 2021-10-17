const express = require('express');
const validate = require('../../middlewares/validate');
const classValidation = require('../../validations/class.validation');
const worksController = require('../../controllers/works.controller');

const router = express.Router();

router.route('/')
  .post(worksController.createWorks)
  .get(worksController.getWorks);

router
  .route('/:id')
  .get(worksController.getWork)
  .patch(worksController.updateWorks)
  .delete(worksController.deleteWorks);

// router.route('/')
//   .post(validate(classValidation.createClass), classController.createClass)
//   .get(classController.getClasses);

// router
//   .route('/:classId')
//   .get(validate(classValidation.getClass), classController.getClass)
//   .patch(validate(classValidation.updateClass), classController.updateClass)
//   .delete(validate(classValidation.deleteClass), classController.deleteClass);

module.exports = router;
