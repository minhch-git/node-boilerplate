const httpStatus = require('http-status');
const { Lop } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a class
 * @param {Object} classBody
 * @returns {Promise<Class>}
 */
const createClass = async (classBody) => {
  return Lop.create(classBody);
};

/**
 * Query for classs
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryClass = async (filter, options) => {
  const lops = await Lop.paginate(filter, options);
  return lops;
};

/**
 * Get class by id
 * @param {ObjectId} id
 * @returns {Promise<Class>}
 */
const getClassById = async (id) => {
  return Lop.findById(id);
};

/**
 * Update class by id
 * @param {ObjectId} classId
 * @param {Object} updateBody
 * @returns {Promise<Class>}
 */
const updateClassById = async (classId, updateBody) => {
  const lop = await getClassById(classId);
  if (!lop) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Class not found');
  }
  Object.assign(lop, updateBody);
  await lop.save();
  return lop;
};

/**
 * Delete class by id
 * @param {ObjectId} classId
 * @returns {Promise<Class>}
 */
const deleteClassById = async (classId) => {
  const lop = await getClassById(classId);
  if (!lop) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Class not found');
  }
  await lop.remove();
  return lop;
};

module.exports = {
  createClass,
  queryClass,
  getClassById,
  updateClassById,
  deleteClassById,
};
