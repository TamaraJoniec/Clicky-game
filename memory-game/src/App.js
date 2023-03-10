import logo from './logo.svg';
import './App.css';
import React from 'react';

// create function that returns a card component 
function Card({image}) {
  return (
    <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="card">
        <img className="card-img-top" src={image} alt="" />
        <div className="card-body">
        </div>
      </div>
    </div>
  );
}

function App() {
  return (

  )
}

export default App;
