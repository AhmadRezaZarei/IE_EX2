import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const AdminSchema = new Schema({
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
    }
});

const AdminModel = mongoose.model('Admin', AdminSchema);

export default AdminModel
