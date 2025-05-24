import mongoose from 'mongoose';

const hospitalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    contactNumber: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /.+\@.+\..+/
    },
    establishedYear: {
        type: Number,
        required: true,
        min: 1800, // Assuming no hospital was established before 1800
        max: new Date().getFullYear() // Current year
    },
    departments: [{
        type: String,
        required: true,
    }],
    doctors: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor',
        required: true
    }],
    patients: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient',
        required: true
    }],
    medicalRecords: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'MedicalRecord',
        required: true
    }],
    emergencyServices: {
        type: Boolean,
        default: false // Indicates if the hospital has emergency services
    }
}, { timestamps: true });

export const Hospital = mongoose.model('Hospital', hospitalSchema);