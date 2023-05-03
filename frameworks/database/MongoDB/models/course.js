import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const CourseSchema = new Schema({
    name: {
        type: String,
    },
    idNumber: {
        type: String
    },
    prerequisites: {
        type: Object
    },
    corequisites: {
        type: Object
    }
});

const CourseModel = mongoose.model('Course', CourseSchema);

export default CourseModel;
