const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { peopleService } = require('../services');

const createPeople = catchAsync(async (req, res) => {
  const people = await peopleService.createPeople(req.body);
  res.status(httpStatus.CREATED).send(people);
});

const getPeoples = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'role']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  options.populate = "professionalId"
  const result = await peopleService.queryPeople(filter, options);
  res.send(result);
});

const getPeople = catchAsync(async (req, res) => {
  const people = await peopleService.getPeopleById(req.params.id);
  if (!people) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  res.send(user);
});

const updatePeople = catchAsync(async (req, res) => {
  const people = await peopleService.updatePeopleById(req.params.id, req.body);
  res.send(people);
});

const deletePeople = catchAsync(async (req, res) => {
  await peopleService.deletePeopleById(req.params.id);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createPeople,
  getPeoples,
  getPeople,
  updatePeople,
  deletePeople,
};
