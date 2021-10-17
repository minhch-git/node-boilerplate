const express = require('express');
const validate = require('../../middlewares/validate');
const classValidation = require('../../validations/class.validation');
const professionalController = require('../../controllers/professional.controller');

const router = express.Router();

router.route('/')
  .post(professionalController.createProfessional)
  .get(professionalController.getProfessionals);

router
  .route('/:id')
  .get(professionalController.getProfessional)
  .patch(professionalController.updateProfessional)
  .delete(professionalController.deleteProfessional);

// router.route('/')
//   .post(validate(classValidation.createClass), classController.createClass)
//   .get(classController.getClasses);

// router
//   .route('/:classId')
//   .get(validate(classValidation.getClass), classController.getClass)
//   .patch(validate(classValidation.updateClass), classController.updateClass)
//   .delete(validate(classValidation.deleteClass), classController.deleteClass);

module.exports = router;
