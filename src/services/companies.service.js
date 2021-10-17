const httpStatus = require('http-status');
const { Companies } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a Companies
 * @param {Object} body
 * @returns {Promise<Companies>}
 */
const createCompanies = async (body) => {
  return Companies.create(body);
};

/**
 * Query for Companiess
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryCompanies = async (filter, options) => {
  const lops = await Companies.paginate(filter, options);
  return lops;
};

/**
 * Get Companies by id
 * @param {ObjectId} id
 * @returns {Promise<Companies>}
 */
const getCompaniesById = async (id) => {
  return Companies.findById(id);
};

/**
 * Update Companies by id
 * @param {ObjectId} CompaniesId
 * @param {Object} updateBody
 * @returns {Promise<Companies>}
 */
const updateCompaniesById = async (CompaniesId, updateBody) => {
  const companies = await getCompaniesById(CompaniesId);
  if (!companies) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Companies not found');
  }
  Object.assign(companies, updateBody);
  await companies.save();
  return companies;
};

/**
 * Delete Companies by id
 * @param {ObjectId} CompaniesId
 * @returns {Promise<Companies>}
 */
const deleteCompaniesById = async (CompaniesId) => {
  const companies = await getCompaniesById(CompaniesId);
  if (!companies) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Companies not found');
  }
  await companies.remove();
  return companies;
};

module.exports = {
  createCompanies,
  queryCompanies,
  getCompaniesById,
  updateCompaniesById,
  deleteCompaniesById,
};
