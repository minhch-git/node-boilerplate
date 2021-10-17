const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { professionalService } = require('../services');

const createProfessional = catchAsync(async (req, res) => {
  const professional = await professionalService.createProfessional(req.body);
  res.status(httpStatus.CREATED).send(professional);
});

const getProfessionals = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'role']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await professionalService.queryProfessional(filter, options);
  res.send(result);
});

const getProfessional = catchAsync(async (req, res) => {
  const professional = await professionalService.getProfessionalById(req.params.id);
  if (!professional) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  res.send(professional);
});

const updateProfessional = catchAsync(async (req, res) => {
  const professional = await professionalService.updateProfessionalById(req.params.id, req.body);
  res.send(professional);
});

const deleteProfessional = catchAsync(async (req, res) => {
  await professionalService.deleteProfessionalById(req.params.id);
  res.status(httpStatus.NO_CONTENT).send({ success: true });
});

module.exports = {
  createProfessional,
  getProfessionals,
  getProfessional,
  updateProfessional,
  deleteProfessional,
};
