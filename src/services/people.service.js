const httpStatus = require('http-status');
const { People } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a class
 * @param {Object} body(People)
 * @returns {Promise<People>}
 */
const createPeople = async (body) => {
  return People.create(body);
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
const queryPeople = async (filter, options) => {
  const peoples = await People.paginate(filter, options);
  return peoples;
};

/**
 * Get People by id
 * @param {ObjectId} id
 * @returns {Promise<Class>}
 */
const getPeopleById = async (id) => {
  return People.findById(id);
};

/**
 * Update class by id
 * @param {ObjectId} id
 * @param {Object} updateBody
 * @returns {Promise<Class>}
 */
const updatePeopleById = async (id, updateBody) => {
  const people = await getPeopleById(id);
  if (!people) {
    throw new ApiError(httpStatus.NOT_FOUND, 'People not found');
  }
  Object.assign(people, updateBody);
  await people.save();
  return people;
};

/**
 * Delete class by id
 * @param {ObjectId} id
 * @returns {Promise<people>}
 */
const deletePeopleById = async (id) => {
  const people = await getPeopleById(id);
  if (!people) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Class not found');
  }
  await people.remove();
  return people;
};

module.exports = {
  createPeople,
  queryPeople,
  getPeopleById,
  updatePeopleById,
  deletePeopleById,
};
