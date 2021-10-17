const httpStatus = require('http-status');
const { Works } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a Works
 * @param {Object} body
 * @returns {Promise<Works>}
 */
const createWorks = async (body) => {
  return Works.create(body);
};

/**
 * Query for Workss
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryWorks = async (filter, options) => {
  const works = await Works.paginate(filter, options);
  return works;
};

/**
 * Get Works by id
 * @param {ObjectId} id
 * @returns {Promise<Works>}
 */
const getWorkById = async (id) => {
  return Works.findById(id);
};

/**
 * Update Works by id
 * @param {ObjectId} WorkId
 * @param {Object} updateBody
 * @returns {Promise<Works>}
 */
const updateWorkById = async (WorkId, updateBody) => {
  const works = await getWorkById(WorkId);
  if (!works) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Works not found');
  }
  Object.assign(works, updateBody);
  await works.save();
  return works;
};

/**
 * Delete Works by id
 * @param {ObjectId} WorkId
 * @returns {Promise<Works>}
 */
const deleteWorkById = async (WorkId) => {
  const work = await getWorkById(WorkId);
  if (!work) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Work not found');
  }
  await work.remove();
  return lop;
};

module.exports = {
  createWorks,
  queryWorks,
  getWorkById,
  updateWorkById,
  deleteWorkById,
};
