const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  first_name: {
    type: String,
  },
  last_name: {
    type: String,
  },
  roll_number: {
    type: Number,
    required: [true, 'Roll number is required'],
    unique: true,
  },
  phone_number: {
    type: Number,
    required: [true, 'Phone number is required'],
    validate: {
      validator: function (v) {
        return /\d{10}/.test(v);
      },
      message: 'Invalid phone number',
    },
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    validate: {
      validator: function (v) {
        return /\S+@\S+\.\S+/.test(v);
      },
      message: 'Invalid email address',
    },
  },
});

module.exports.Student = mongoose.model('Student', studentSchema);
