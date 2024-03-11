import mongoose from "mongoose";

const noteSchema  = mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    concerned_person:{
        type: String,
        required: true,
    },
    concernedDate:{
        type: String,
        required: true,
    }
},
{
    timestamps: true,
})

export const Note = mongoose.model('Cat', noteSchema)
