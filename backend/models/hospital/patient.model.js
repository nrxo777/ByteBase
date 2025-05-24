import mongoose from 'mongoose';

const patientSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
        min: 0
    },
    diagonsedWith: {
        type: String,
        required: true,
    },
    patientAddress: {
        type: String,
        required: true,
    },
    contactNumber: {
        type: String,
        required: true,
    },
    bloodGroup: {
        type: String,
        required: true,
        enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']
    },
    gender: {
        type: String,
        required: true,
        enum: ["Male", "Female"]
    }, 
    admittedIn: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hospital',
        required: true
    },
    
    
}, { timestamps: true });

export const Patient = mongoose.model('Patient', patientSchema);