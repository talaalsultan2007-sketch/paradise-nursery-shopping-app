  import React, { useState } from 'react';

import './App.css';

import AboutUs from './AboutUs';

function App() {

  const [showAbout, setShowAbout] = useState(false);

  return (

    <div className="App">

      {!showAbout ? (

        <div className="landing-page">

          <div className="landing-content">

            <h1>Paradise Nursery</h1>

            <p>Where Green Meets Serenity</p>

            <p>

              Welcome to Paradise Nursery!

              Discover our beautiful collection

              of plants for your home.

            </p>

            <button onClick={() => setShowAbout(true)}>

              Get Started

            </button>

          </div>

        </div>

      ) : (

        <AboutUs />

      )}

    </div>

  );

}

export default App;
