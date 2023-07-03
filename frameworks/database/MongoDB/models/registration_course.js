import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const RegistrationCourseSchema = new Schema({
    idNumber: {
        type: String
    },
    termId: {
        type: String,
    },
    termCourseId: {
        type: String,
    },
    isPreReg: {
        type: Boolean
    },
    name: {
        type: String,
    },
    professorName: {
        type: String,
    },
    capacity: {
        type: String,
    },
    classDateTime: {
        type: String,
    },
    examDateTime: {
        type: String,
    }
});

const RegistrationCourseModel = mongoose.model('RegistrationCourse', RegistrationCourseSchema);

export default RegistrationCourseModel;