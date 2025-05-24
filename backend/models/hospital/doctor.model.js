import mongoose from 'mongoose';

const hospitalHoursSchema = new mongoose.Schema({
    day: {
        type: String,
        required: true,
        enum: ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
    },
    startingTime: {
        type: String,
        required: true,
    },
    endingTime: {
        type: String,
        required: true,
    }
}, { timestamps: true });

const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    specialization: {
        type: String,
        required: true,
    },
    experience: {
        type: Number,
        required: true,
        min: 0
    },
    contactNumber: {
        type: String,
        required: true,
    },
    salary: {
        type: String,
        required: true,
        min: 0
    },
    hospital: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Hospital',
            required: true
        },
    ],
    hospitalHours: [
        hospitalHoursSchema
    ],
    patients: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient'
    }],
    medicalRecords: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'MedicalRecord'
    }],

}, { timestamps: true });

export const Doctor = mongoose.model('Doctor', doctorSchema);