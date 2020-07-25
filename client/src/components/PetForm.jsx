import React, { useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const CreatePet = (props) => {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skillOne, setSkillOne] = useState("")
    const [skillTwo, setSkillTwo] = useState("")
    const [errors, setErrors] = useState({});

    const createNewPet = (e) => {
        e.preventDefault();
        const pets = { name, type, description, skillOne, skillTwo };
        axios.post("http://localhost:8000/api/pets/new", pets)
            .then(res => {
                if (res.data.error) {
                    setErrors(res.data.error.errors);
                } else {
                    navigate("/");
                }
            })
            .catch(err => console.log(err));
    }

    return (
        <div className="container-fluid ">
            <div className="form-group bg-dark rounded shadow-lg text-dark">
                <form onSubmit={createNewPet}>
                    <p className="text-light p-1">Name: </p>
                    <input type="text" onChange={e => setName(e.target.value)}></input>
                    {errors.name ? <p className="text-danger ">{errors.name.properties.message}</p> : ""}
                    <p className="text-light mt-1">Type: </p>
                    <input type="text" onChange={e => setType(e.target.value)}></input>
                    {errors.type ? <p className="text-danger">{errors.type.properties.message}</p> : ""}

                    <p className="text-light mt-1">Description: </p>
                    <textarea rows="6" columns="30" type="text" onChange={e => setDescription(e.target.value)} ></textarea>
                    {errors.description ? <p className="text-danger">{errors.description.properties.message}</p> : ""}

                    <p className="text-light m-1">Skills: </p>
                    <div>
                        <input className="m-1" type=" text" onChange={e => setSkillOne(e.target.value)} value={skillOne}></input>
                        {errors.description ? <p className="text-danger">{errors.skillOne.properties.message}</p> : ""}
                    </div>
                    <div>
                        <input className="m-1" type=" text" onChange={e => setSkillTwo(e.target.value)} value={skillTwo}></input>
                    </div>

                    <div>
                        <input className="btn btn-success m-2 " type="submit" value="Add"></input>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreatePet;