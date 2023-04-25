import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    idNumber: {
        type: String
    },
    password: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },
    grade: {
        type: String
    },
    entranceYear: {
        type: Number
    },
    mean: {
        type: Number
    },
    faculty: {
        type: String
    },
    fieldOfStudy: {
        type: String
    }
});

module.exports.StudentModel = mongoose.model('Student', StudentSchema);

