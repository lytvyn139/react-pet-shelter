import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PetHomePage from "./PetHomePage";

const AllPets = (props) => {
    const [pets, setPets] = useState([]);
    const fetchPets = () => {
        axios.get("http://localhost:8000/api/pets/")
            .then(res => {
                console.log(res);
                console.log("data:", res.data.pet);
                setPets(res.data.pet)
            })
            .catch(err => console.log(err));
    }

    useEffect(() => {
        fetchPets();
    }, []);

    return (
        <div>
            <div>
                <p>Please be good with all animals </p>
                <span role="img" aria-label="pets">🐶🐱🐰🦊🐻🐼🐨🐯🦁🐮🐷🐸🐵</span>
            </div>
            {pets.map((pet) =>
                <PetHomePage key={pet._id} pet={pet} />)}
        </div>
    );
}

export default AllPets;