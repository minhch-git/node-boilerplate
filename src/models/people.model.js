const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const peopleSchema = mongoose.Schema(
    {
        PName: {
            type: String,
            required: true,
            trim: true,
        }
        ,
        professionalId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Professional',
        },
        sex: {
            type: String,
            default: 'male'
        },
        DOB: {
            type: Date,
        },
        phone: {
            type: String
        },
        address: String
    },
    {
        timestamps: true,
    }
);

// add plugin that converts mongoose to json
peopleSchema.plugin(toJSON);
peopleSchema.plugin(paginate);

const People = mongoose.model('People', peopleSchema);

module.exports = People;
