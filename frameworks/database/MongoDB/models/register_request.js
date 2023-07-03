import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const RegisterRequestSchema = new Schema({
    idNumber: {
        type: String,
    },
    studentId: {
        type: String,
    },
    regCourseId: {
        type: String
    },
    isPreReg: {
        type: Boolean
    },
    termId: {
        type: String
    }
});

const RegisterRequestModel = mongoose.model('RegisterRequest', RegisterRequestSchema);

export default RegisterRequestModel;

