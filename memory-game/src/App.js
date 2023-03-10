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
    { image: 'https://cuteanimals.net/wp-content/uploads/2022/01/baby-panda.jpg' },
    { image: 'https://cuteanimals.net/wp-content/uploads/2022/01/baby-kitten.jpg' },
    { image: 'https://cuteanimals.net/wp-content/uploads/2022/01/baby-puppy.jpg' },
    { image: 'https://cuteanimals.net/wp-content/uploads/2022/01/baby-rabbit.jpg' },
    { image: 'https://cuteanimals.net/wp-content/uploads/2022/01/baby-duck.jpg' },
    { image: 'https://cuteanimals.net/wp-content/uploads/2022/01/baby-elephant.jpg' },
    { image: 'https://cuteanimals.net/wp-content/uploads/2022/01/baby-kangaroo.jpg' },
    { image: 'https://cuteanimals.net/wp-content/uploads/2022/01/baby-otter.jpg' },
    { image: 'https://cuteanimals.net/wp-content/uploads/2022/01/baby-seal.jpg' },
    { image: 'https://cuteanimals.net/wp-content/uploads/2022/01/baby-sloth.jpg' },
    { image: 'https://cuteanimals.net/wp-content/uploads/2022/01/baby-tiger.jpg' },
    { image: 'https://cuteanimals.net/wp-content/uploads/2022/01/baby-zebra.jpg' },
  ];

  return (
   
  );
}



export default App;
