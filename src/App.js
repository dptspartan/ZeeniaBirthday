import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  var first = 'Shoaib';
  var second = 'Ayaan';
  var quizPased = false;
  const [formData, setFormData] = useState({
    first: '',
    second: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform actions with the form data
    if (formData['first'] === first && formData['second'] === second){
      console.log('You\'re In');
      setFormSubmitted(true);
    }
    // You can call your custom function here or perform other actions
  };
  return (
    <div>
      {!formSubmitted ?(
      <div className="Questionnaire">
        <h2 className='threat'>Name Two of the best programmers in FCCU. Our friendship depends on this, Beware...</h2>
        <form onSubmit={handleSubmit}>
          {/* ... (same form structure as before) */}

          {/* Attach the event handlers to the input elements */}
          <label htmlFor='q1'>1st: </label>
          <input
            type="text"
            id="q1"
            name="first"
            value={formData.first}
            onChange={handleInputChange}
            required
          />
          <br></br>
          <label htmlFor='q2'>2nd: </label>
          <input
            type="text"
            id="q2"
            name="second"
            value={formData.second}
            onChange={handleInputChange}
            required
          />
          <br></br>

          {/* ... (similar for other input elements) */}

          <input type="submit" value="Submit" />
        </form>
      </div>
      ) : (
        <div>
          <div class="birthday-container">
        <img id="birthday-pic" src="zeeeee.jpg" alt="Beautiful Zeenia" />
        <h1>Happy Birthday!</h1>
        <link rel="stylesheet" href="Untitled-1.css" />
        <h3>Press Play!</h3>
        <h6>Bcuz auto play not working </h6>
        <audio controls autoplay>
        <source src="song.mp3" type="audio/mp3" />
        </audio>
    </div>
        </div>
      )}
    </div>
  );
};



export default App;
