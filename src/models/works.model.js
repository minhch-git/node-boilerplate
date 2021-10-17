const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const workSchema = mongoose.Schema(
    {
        salary: {
            type: Number,
            required: true
        },
        dateOfJoin: {
            type: Date,
            default: Date.now()
        },
    },
    {
        timestamps: true,
    }
);

// add plugin that converts mongoose to json
workSchema.plugin(toJSON);
workSchema.plugin(paginate);

const Works = mongoose.model('Works', workSchema);

module.exports = Works;
