import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import PetForm from './components/PetForm';
import AllPets from './components/AllPets';
import EditPet from './components/EditPet';
import ShowPetDetails from './components/ShowPetDetails';

import { Router, Link } from "@reach/router";

function App() {
  return (
    <div className="wrapper">
      <div className="text-center container p-4 bg-dark text-light">
        <div>
          <h3>⚜ Pet Shelter ⚜</h3>
        </div>
        <Link to="/"><button className="btn btn-secondary m-4">Home</button></Link>
        <Link to="/new"><button className="btn btn-secondary m-4">Add Pet</button></Link>
        <Router>
          <AllPets path="/" />
          <PetForm path="/new" />
          <EditPet path="update/:_id" />
          <ShowPetDetails path="/:_id" />
        </Router>
      </div>
    </div>
  );
}

export default App;
