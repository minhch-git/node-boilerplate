const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { worksService } = require('../services');

const createWorks = catchAsync(async (req, res) => {
  const works = await worksService.createWorks(req.body);
  res.status(httpStatus.CREATED).send(works);
});

const getWorks = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'role']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await worksService.queryWorks(filter, options);
  res.send(result);
});

const getWork = catchAsync(async (req, res) => {
  const works = await worksService.getWorkById(req.params.classId);
  if (!works) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  res.send(user);
});

const updateWorks = catchAsync(async (req, res) => {
  const works = await worksService.updateWorkById(req.params.classId, req.body);
  res.send(works);
});

const deleteWorks = catchAsync(async (req, res) => {
  await worksService.deleteWorkById(req.params.classId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createWorks,
  getWorks,
  getWork,
  updateWorks,
  deleteWorks,
};
