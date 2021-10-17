const express = require('express');
const validate = require('../../middlewares/validate');
const classValidation = require('../../validations/class.validation');
const peopleController = require('../../controllers/people.controller');

const router = express.Router();

router.route('/')
  .post(peopleController.createPeople)
  .get(peopleController.getPeoples);

router
  .route('/:id')
  .get(peopleController.getPeople)
  .patch(peopleController.updatePeople)
  .delete(peopleController.deletePeople);

// router.route('/')
//   .post(validate(classValidation.createClass), classController.createClass)
//   .get(classController.getClasses);

// router
//   .route('/:classId')
//   .get(validate(classValidation.getClass), classController.getClass)
//   .patch(validate(classValidation.updateClass), classController.updateClass)
//   .delete(validate(classValidation.deleteClass), classController.deleteClass);

module.exports = router;
