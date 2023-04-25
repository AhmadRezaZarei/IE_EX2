import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const EducationalManagerSchema = new Schema({
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
    }
});

const EducationalManagerModel = mongoose.model('EducationalManager', EducationalManagerSchema);

module.exports.EducationalManagerModel = EducationalManagerModel;

