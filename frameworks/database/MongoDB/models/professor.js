import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ProfessorSchema = new Schema({
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
    faculty: {
        type: String
    },
    fieldOfStudy: {
        type: String
    },
    rank: {
        type: String
    }
});

const ProfessorModel = mongoose.model('Professor', ProfessorSchema);

export default ProfessorModel;
