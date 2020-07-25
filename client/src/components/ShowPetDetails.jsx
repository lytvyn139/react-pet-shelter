import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const ShowPetDetails = (props) => {
    const [name, setTitle] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skillOne, setSkillOne] = useState("");
    const [skillTwo, setSkillTwo] = useState("");
    const [likes, setLikes] = useState(0);
    const [setErrors] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${props._id}`)
            .then(res => {
                setTitle(res.data.pet.name);
                setType(res.data.pet.type);
                setDescription(res.data.pet.description);
                setSkillOne(res.data.pet.skillOne);
                setSkillTwo(res.data.pet.skillTwo);
                console.log(res);
            })
            .catch(err => console.log(err));
    }, [props._id]);

    const deletePet = (e) => {
        e.preventDefault();
        axios.delete(`http://localhost:8000/api/pets/delete/${props._id}`)
            .then(res => {
                console.log(res);
                if (res.data.error) {
                    setErrors(res.data.error);
                } else {
                    navigate("/");
                }
            })
            .catch(err => console.log(err));
    }

    return (
        <div className="form-group m-2 p-2 bg-dark rounded shadow-lg text-dark">
            <div>
                <p className="text-light text-left mt-2 ml-2">Name: {name}</p>
                <p className="text-light text-left mt-2 ml-2">Type: {type}</p>
                <p className="text-light text-left mt-2 ml-2">Description: {description}</p>
                <p className="text-light text-left mt-2 ml-2">Skills: {skillOne} | {skillTwo} </p>
                <p className="text-light text-left mt-2 ml-2">Likes: {likes}</p>
                <button className="btn btn-warning m-1 text-dark" onClick={deletePet} value={name}>Adopt</button>
                <button className="btn bg-success m-1 text-dark" onClick={() => setLikes(likes + 1)}>Like</button>
            </div>
        </div>
    );
};
export default ShowPetDetails

