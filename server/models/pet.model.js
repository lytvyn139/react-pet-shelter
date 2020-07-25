console.log("pet.model.js");

const mongoose = require("mongoose");
const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "pet name is required"],
        minlength: [3, "name must be at least 3 characters"]
    },
    type: {
        type: String,
        required: [true, "pet type is required"],
        minlength: [3, "type must be at least 3 characters"]
    },
    description: {
        type: String,
        required: [true, "pet description is required"],
        minlength: [5, "description must be at least 5 characters"]
    },
    skillOne: {
        type: String,
        required: [true, "at least one skill is required"],
        minlength: [2, "skill must be at least 2 characters"]
    },
    skillTwo: {
        type: String,
    },
}, { timestamps: true });


module.exports = mongoose.model("Pet", PetSchema);