import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ITManagerSchema = new Schema({
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

const ITManagerModel = mongoose.model('ITManager', ITManagerSchema);

export default ITManagerModel;