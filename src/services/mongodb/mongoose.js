const mongoose = require('mongoose');
const { Student } = require('../schema/student');
const MONGODB_URI = process.env.MONGODB_URI; // eslint-disable-line

let mongodbClient;

const mongodb = async () => {
  if (!mongodbClient) {
    mongodbClient = mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await mongodbClient;
    console.log('Successfully connected to MongoDB');
  }
  return mongodbClient;
};

const postStudent = async (payload) => {
  await mongodb();
  const student = new Student(payload);
  return await student.save();
};

const getAllStudents = async () => {
  await mongodb();
  const students = await Student.find({});
  return students;
};

const getStudentById = async (id) => {
  await mongodb();
  const students = await Student.findById(id);
  return students;
};

const updateStudentById = async (id, updatedData) => {
  await mongodb();
  const students = await Student.findByIdAndUpdate(id, { $set: updatedData });
  return students;
};

const deleteContactById = async (id) => {
  await mongodb();
  const students = await Student.findByIdAndDelete(id);
  return students;
};

module.exports = {
  postStudent,
  getAllStudents,
  getStudentById,
  updateStudentById,
  deleteContactById,
};
