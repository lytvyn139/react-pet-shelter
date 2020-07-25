/* MAIN PAGE */
import React from 'react';
import { Link } from "@reach/router";

const PetHomePage = (props) => {
    return (
        <div className="m-2 p-2 bg-dark rounded shadow-lg text-dark ">
            <h4 className="font-weight-bol text-light">{props.pet.name}</h4>
            <p className="text-light text-left mt-2 ml-2">Type: {props.pet.type}</p>
            <p className="text-light text-left mt-2 ml-2">Description: {props.pet.description}</p>
            <p className="text-light text-left mt-2 ml-2">Skills: {props.pet.skillOne} | {props.pet.skillTwo} </p>
            <div>
                <Link className="btn btn-secondary m-2 " to={"/update/" + props.pet._id} >Edit</Link>
                <Link className="btn btn-secondary m-2 " to={"/" + props.pet._id}>Details</Link>
            </div>
        </div>
    );
}

export default PetHomePage;