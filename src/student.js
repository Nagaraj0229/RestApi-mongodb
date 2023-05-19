const {
  postStudent,
  getAllStudents,
  getStudentById,
  updateStudentById,
  deleteContactById,
} = require('./services/mongodb/mongoose');

const createStudent = async (data) => {
  console.log('createStudent');
  const student = {
    first_name: data.firstName,
    last_name: data.lastName,
    roll_number: data.rollNumber,
    phone_number: data.phoneNumber,
    email: data.email,
    city: data.city,
    country: data.country,
    pincode: data.pincode,
  };
  console.log(student);
  const studentDocument = await postStudent(student);
  return studentDocument;
};

const getStudents = async () => {
  console.log('getStudents');
  const students = await getAllStudents();
  console.log(students);
  return students;
};

const getStudent = async (id) => {
  console.log('getStudent');
  const student = await getStudentById(id);
  console.log(student);
  return student;
};

const updateStudent = async (id, data) => {
  console.log('updateStudent');
  const student = await updateStudentById(id, data);
  console.log(student);
  return student;
};

const deleteContact = async (id) => {
  console.log('deleteContact');
  const student = await deleteContactById(id);
  console.log(student);
  return student;
};

module.exports = {
  createStudent,
  getStudents,
  getStudent,
  updateStudent,
  deleteContact,
};
