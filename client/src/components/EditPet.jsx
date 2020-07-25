import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const EditPet = (props) => {

    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skillOne, setSkillOne] = useState("");
    const [skillTwo, setSkillTwo] = useState("");
    const [errors, setErrors] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${props._id}`)
            .then(res => {
                setName(res.data.pet.name);
                setType(res.data.pet.type);
                setDescription(res.data.pet.description);
                setSkillOne(res.data.pet.skillOne)
                setSkillTwo(res.data.pet.skillTwo)
            })
            .catch(err => console.log(err));
    }, [props._id]);

    const updateExistingPet = (e) => {
        e.preventDefault();
        const pets = { name, type, description, skillOne, skillTwo };
        axios.put(`http://localhost:8000/api/pets/update/${props._id}`, pets)
            .then(res => {
                console.log(res);
                if (res.data.error) {
                    setErrors(res.data.error.errors);
                } else {
                    navigate("/");
                }
            })
            .catch(err => console.log(err));
    }

    return (
        <div className="App">
            <div className="form-group m-2 p-2 bg-dark rounded shadow-lg text-dark">

                <form onSubmit={updateExistingPet}>
                    <p className="text-light mt-1">Pet Name:</p>
                    <input type="text" onChange={e => setName(e.target.value)} value={name} />
                    {errors.name ? <p className="text-danger">{errors.name.properties.message}</p> : ""}

                    <p className="text-light mt-1">Pet Type: </p>
                    <input type="text" onChange={e => setType(e.target.value)} value={type} />
                    {errors.type ? <p className="text-danger">{errors.type.properties.message}</p> : ""}

                    <p className="text-light mt-1">Pet Description: </p>
                    <textarea rows="5" columns="1" type="text" onChange={e => setDescription(e.target.value)} value={description}></textarea>
                    {errors.description ? <p className="text-danger">{errors.description.properties.message}</p> : ""}

                    <p className="text-light mt-1">Pet Skills: </p>
                    <div>
                        <input className="m-1" type="text" onChange={e => setSkillOne(e.target.value)} value={skillOne}></input>
                    </div>
                    <div>
                        <input className="m-1" type="text" onChange={e => setSkillTwo(e.target.value)} value={skillTwo}></input>
                    </div>

                    <input className="btn btn-success m-2" type="submit" value="Update"></input>
                </form>
            </div>
        </div>
    );
}

export default EditPet;