const express = require('express');
const validate = require('../../middlewares/validate');
const classValidation = require('../../validations/class.validation');
const companiesController = require('../../controllers/companies.controller');

const router = express.Router();

router.route('/')
    .post(companiesController.createCompanie)
    .get(companiesController.getCompaniess);

router
    .route('/:id')
    .get(companiesController.getCompanies)
    .patch(companiesController.updateCompanies)
    .delete(companiesController.deleteCompanies);

// router.route('/')
//   .post(validate(classValidation.createClass), classController.createClass)
//   .get(classController.getClasses);

// router
//   .route('/:classId')
//   .get(validate(classValidation.getClass), classController.getClass)
//   .patch(validate(classValidation.updateClass), classController.updateClass)
//   .delete(validate(classValidation.deleteClass), classController.deleteClass);

module.exports = router;
