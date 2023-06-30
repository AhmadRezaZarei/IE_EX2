import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const TermSchema = new Schema({
    name: {
        type: String,
    },
    isEnded: {
        type: Boolean,
    },
    idNumber: {
        type: String
    },

});

const TermModel = mongoose.model('Term', TermSchema);

export default TermModel;
