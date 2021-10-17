const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { companiesService } = require('../services');

const createCompanie = catchAsync(async (req, res) => {
  const people = await companiesService.createCompanies(req.body);
  res.status(httpStatus.CREATED).send(people);
});

const getCompaniess = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'role']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await companiesService.queryCompanies(filter, options);
  res.send(result);
});

const getCompanies = catchAsync(async (req, res) => {
  const people = await companiesService.getCompaniesById(req.params.id);
  if (!people) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  res.send(user);
});

const updateCompanies = catchAsync(async (req, res) => {
  const people = await companiesService.updateCompaniesById(req.params.id, req.body);
  res.send(people);
});

const deleteCompanies = catchAsync(async (req, res) => {
  await companiesService.deleteCompaniesById(req.params.id);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createCompanie,
  getCompaniess,
  getCompanies,
  updateCompanies,
  deleteCompanies,
};
