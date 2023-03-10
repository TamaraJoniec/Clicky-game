import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState } from 'react';

// create function that returns a card component 
function Card({image, id, onClick}) {
  return (
    <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="card" onClick={() => onClick(id)}>
        <img className="card-img-top" src={image} alt="" />
        <div className="card-body">
        </div>
      </div>
    </div>
  );
}

function App() {
  const [cards, setCards] = useState([
    { id: 1, image: 'https://images.pexels.com/photos/50577/hedgehog-animal-baby-cute-50577.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 2, image: 'https://images.pexels.com/photos/39317/chihuahua-dog-puppy-cute-39317.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 3, image: 'https://images.pexels.com/photos/735423/pexels-photo-735423.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 4, image: 'https://images.pexels.com/photos/127027/pexels-photo-127027.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 5, image: 'https://images.pexels.com/photos/162140/duckling-birds-yellow-fluffy-162140.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 6, image: 'https://images.pexels.com/photos/69372/pexels-photo-69372.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 7, image: 'https://images.pexels.com/photos/1464518/pexels-photo-1464518.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 8, image: 'https://images.pexels.com/photos/157465/pexels-photo-157465.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 9, image: 'https://images.pexels.com/photos/1525606/pexels-photo-1525606.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 10, image: 'https://images.pexels.com/photos/2883510/pexels-photo-2883510.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 11, image: 'https://images.pexels.com/photos/6337840/pexels-photo-6337840.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 12, image: 'https://images.pexels.com/photos/802112/pexels-photo-802112.jpeg?auto=compress&cs=tinysrgb&w=400' }
  ]);

  function handleCardClick(id) {
    const shuffledCards = shuffleArray(cards);
    setCards(shuffledCards);
  }

  function shuffleArray(array) {
    // Create a new copy of the array to avoid mutating the original
    const newArray = [...array];
    // Shuffle the new array
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  }
  return (
    <div className="container">
      <h1 className="text-center mb-4">Memory Game</h1>
      <div className="row">
        {cards.map((card, index) => (
          <Card key={index} image={card.image} id={card.id} onClick={handleCardClick} />
        ))}
      </div>
    </div>
  );
}

export default App;
