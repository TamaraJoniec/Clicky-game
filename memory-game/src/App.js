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
  const cards = [
    { image: 'https://images.pexels.com/photos/50577/hedgehog-animal-baby-cute-50577.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { image: 'https://images.pexels.com/photos/39317/chihuahua-dog-puppy-cute-39317.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { image: 'https://images.pexels.com/photos/735423/pexels-photo-735423.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { image: 'https://images.pexels.com/photos/127027/pexels-photo-127027.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { image: 'https://images.pexels.com/photos/162140/duckling-birds-yellow-fluffy-162140.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { image: 'https://images.pexels.com/photos/69372/pexels-photo-69372.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { image: 'https://images.pexels.com/photos/1464518/pexels-photo-1464518.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { image: 'https://images.pexels.com/photos/157465/pexels-photo-157465.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { image: 'https://images.pexels.com/photos/1525606/pexels-photo-1525606.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { image: 'https://images.pexels.com/photos/2883510/pexels-photo-2883510.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { image: 'https://images.pexels.com/photos/6337840/pexels-photo-6337840.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { image: 'https://images.pexels.com/photos/802112/pexels-photo-802112.jpeg?auto=compress&cs=tinysrgb&w=400' }    
  ];

  return (
    <div className="container">
      <h1 className="text-center mb-4">Memory Game</h1>
      <div className="row">
        {/* Map over each card and create a Card component with image and index as props*/}
        {cards.map((card, index) => (
          <Card key={index} image={card.image} />
        ))}
      </div>
    </div>
  );
}

export default App;
