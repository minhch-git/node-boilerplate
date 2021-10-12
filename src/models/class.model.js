const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const { toJSON, paginate } = require('./plugins');

const lopSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    numberStudent: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
lopSchema.plugin(toJSON);
lopSchema.plugin(paginate);

const Lop = mongoose.model('Lop', lopSchema);

module.exports = Lop;
