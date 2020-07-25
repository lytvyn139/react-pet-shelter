console.log("pet.controller.js");

const Pet = require("../models/pet.model");

class PetController {
    createNewPet(req, res) {
        console.log(`creating new pet : ${req.body}`)
        Pet.create(req.body)
            .then(newPet => res.json({ pet: newPet }))
            .catch(err => res.json({ message: "Something went wrong", error: err }));
    };
    findAllPets(req, res) {
        Pet.find().sort("type")
            .then(allPets => res.json({ pet: allPets }))
            .catch(err => res.json({ message: "Something went wrong", error: err }));
    };

    findOneSinglePet(req, res) {
        Pet.findOne({ _id: req.params.id })
            .then(oneSinglePet => res.json({ pet: oneSinglePet }))
            .catch(err => res.json({ message: "Something went wrong", error: err }));
    };

    updateExistingPet(req, res) {
        Pet.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
            .then(updatedPet => res.json({ pet: updatedPet }))
            .catch(err => res.json({ message: "Something went wrong", error: err }));
    };

    deleteAnExistingPet(req, res) {
        Pet.deleteOne({ _id: req.params.id })
            .then(result => res.json({ result: result }))
            .catch(err => res.json({ message: "Something went wrong", error: err }));
    };
}
module.exports = new PetController();


