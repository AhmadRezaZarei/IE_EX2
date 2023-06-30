import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const RegisterRequestSchema = new Schema({
    idNumber: {
        type: String,
    },
    studentIdNumber: {
        type: String,
    },
    regCourseIdNumber: {
        type: String
    },
    isPreReg: {
        type: String
    },
    termIdNumber: {
        type: String
    }
});

const RegisterRequestModel = mongoose.model('RegisterRequest', RegisterRequestSchema);

export default RegisterRequestModel;

