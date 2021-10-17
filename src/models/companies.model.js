const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const companySchema = mongoose.Schema(
    {
        CName: {
            type: String,
            required: true,
            trim: true,
        },
        address: {
            type: String,
            required: true,
            trim: true,
        }
    },
    {
        timestamps: true,
    }
);

// add plugin that converts mongoose to json
companySchema.plugin(toJSON);
companySchema.plugin(paginate);

const Companies = mongoose.model('Companies', companySchema);

module.exports = Companies;
