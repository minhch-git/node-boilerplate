const httpStatus = require('http-status');
const { Professional } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a Professional
 * @param {Object} body
 * @returns {Promise<Professional>}
 */
const createProfessional = async (body) => {
  return Professional.create(body);
};

/**
 * Query for Professionals
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryProfessional = async (filter, options) => {
  const lops = await Professional.paginate(filter, options);
  return lops;
};

/**
 * Get Professional by id
 * @param {ObjectId} id
 * @returns {Promise<Professional>}
 */
const getProfessionalById = async (id) => {
  return Professional.findById(id);
};

/**
 * Update Professional by id
 * @param {ObjectId} ProfessionalId
 * @param {Object} updateBody
 * @returns {Promise<Professional>}
 */
const updateProfessionalById = async (ProfessionalId, updateBody) => {
  const professional = await getProfessionalById(ProfessionalId);
  if (!professional) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Professional not found');
  }
  Object.assign(professional, updateBody);
  await professional.save();
  return professional;
};

/**
 * Delete Professional by id
 * @param {ObjectId} ProfessionalId
 * @returns {Promise<Professional>}
 */
const deleteProfessionalById = async (ProfessionalId) => {
  const professional = await getProfessionalById(ProfessionalId);
  if (!professional) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Professional not found');
  }
  await professional.remove();
  return professional;
};

module.exports = {
  createProfessional,
  queryProfessional,
  getProfessionalById,
  updateProfessionalById,
  deleteProfessionalById,
};
