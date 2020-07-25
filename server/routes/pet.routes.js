console.log("pet.routes.js");

const PetController = require("../controllers/pet.controller");

module.exports = app => {
    app.post("/api/pets/new", PetController.createNewPet);
    app.get("/api/pets", PetController.findAllPets);
    app.get("/api/pets/:id", PetController.findOneSinglePet);
    app.put("/api/pets/update/:id", PetController.updateExistingPet);
    app.delete("/api/pets/delete/:id", PetController.deleteAnExistingPet);
};