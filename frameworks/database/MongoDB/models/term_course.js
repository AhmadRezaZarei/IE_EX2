import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const termCourseSchema = new Schema({
    idNumber: {
        type: String
    },
    courseId: {
        type: String,
    },
    courseDataAndTime: {
        type: String,
    },
    examDataAndTime: {
        type: String
    },
    location: {
        type: String
    },
    professorId: {
        type: String
    },
    capacity: {
        type: String
    },
    term: {
        type: String
    },
});

const TermCourseModel = mongoose.model('TermCourse', termCourseSchema);

export default TermCourseModel
