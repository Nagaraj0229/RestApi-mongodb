const { createStudent, getStudents, getStudent, updateStudent, deleteContact } = require('./student');

const { sendResponse, sendErrorResponse } = require('./utils/response.utils');

module.exports.student = async (event) => {
  console.log('student');
  const data = JSON.parse(event.body);
  try {
    const newStudent = await createStudent(data);
    return sendResponse(newStudent);
  } catch (e) {
    console.log(e.message);
    return sendErrorResponse(e.message);
  }
};

module.exports.studentsList = async () => {
  console.log('studentsList');
  try {
    const students = await getStudents();
    return sendResponse(students);
  } catch (e) {
    console.log(e.message);
    return sendErrorResponse(e.message);
  }
};

module.exports.studentRead = async (event) => {
  console.log('studentRead');
  const studentId = event?.pathParameters?.id;
  try {
    const student = await getStudent(studentId);
    console.log(student);
    return sendResponse(student);
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

module.exports.updateStudent = async (event) => {
  console.log('updateStudent');
  const updateId = event?.pathParameters?.id;
  const data = JSON.parse(event.body);
  try {
    const student = await updateStudent(updateId, data);
    return sendResponse(student);
  } catch (error) {
    console.log(error.message);
    return sendErrorResponse(error.message);
  }
};

module.exports.deleteContact = async (event) => {
  console.log('deleteContact');
  const deleteId = event?.pathParameters?.id;
  try {
    const student = await deleteContact(deleteId);
    return sendResponse(student);
  } catch (error) {
    console.log(error.message);
    return sendErrorResponse(error.message);
  }
};
