import { useState } from 'react'
import './App.css'

const choices = [
  { name: 'Rock', icon: '🪨 ' },
  { name: 'Paper', icon: '📄 ' },
  { name: 'Scissors', icon: '✂️ ' },
  ];

const Header = () => {
  return (
    <div>
      <h1>Rock-Paper-Scissors Game</h1>
      <p className="instructions">Choose Rock, Paper, or Scissors to play against the computer!</p>
    </div>
  );
};

const Scoreboard = () => {
  return(
    <div id="scoreboard">
      <p>Player Score: <span id="player-score">0</span></p>
      <p>Computer Score: <span id="computer-score">0</span></p>
    </div>
  );
};

const Choices = () => {
  return(
    <div className="choices">
        {
          choices.map((choice, index) => (
            <button key={index}>{choice.icon}{choice.name}</button>
          ))
        }
    </div>
  );
};

const Result = () => {
  return(
    <div id="result">
        <p></p>
        <p></p>
    </div>
  );
};

const Reset = () => {
  return(
    <button id="reset">Reset Game</button>
  );
};

const Footer = () => {
  return(
    <footer>
        <div>
          <p>&copy; Ayani 2025 😉</p>
        </div>
    </footer>
  );
};

const App = () => {
  return (
    <div>
      <Header/>
      <Scoreboard/>
      <Choices/>
      <Result/>
      <Reset/>
      <Footer/>
    </div>
);
    
 }
 export default App;