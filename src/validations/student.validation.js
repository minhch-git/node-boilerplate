const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createStudent = {
    body: Joi.object().keys({
        name: Joi.string().required(),
        address: Joi.string().required(),
        born: Joi.date().required()
    }),
};

const getStudent = {
    params: Joi.object().keys({
        studentId: Joi.string().custom(objectId),
    }),
};

const updateStudent = {
    params: Joi.object().keys({
        studentId: Joi.required().custom(objectId),
    }),
    body: Joi.object()
        .keys({
            name: Joi.string(),
            address: Joi.string(),
            born: Joi.date()
        })
        .min(1),
};

const deleteStudent = {
    params: Joi.object().keys({
        studentId: Joi.string().custom(objectId),
    }),
};

module.exports = {
    createStudent,
    getStudent,
    updateStudent,
    deleteStudent,
};
