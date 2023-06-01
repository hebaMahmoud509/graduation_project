const mongoose = require('mongoose');
const patientSchema = mongoose.Schema({
        name: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
    },
    nationalID: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String,
    },

    gender: {
        type: String,
    },
    foot_image_path: {
            type: String,
    },
    retina_image_path: {
            type: String
    },
    foot_ulcer_diagnosis:{
            type: Boolean
    },
        retina_ulcer_diagnosis:{
            type: Boolean
        }
},
{
    timestamps: true,
});
module.exports = mongoose.model('Patient', patientSchema);
