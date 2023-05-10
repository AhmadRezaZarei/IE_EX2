import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ManagerSchema = new Schema({
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

const ManagerModel = mongoose.model('Manager', ManagerSchema);
export default ManagerModel