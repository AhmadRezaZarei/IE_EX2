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
    }

});

const RegistrationCourseModel = mongoose.model('RegistrationCourse', RegistrationCourseSchema);

export default RegistrationCourseModel;