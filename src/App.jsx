import { useState } from 'react'
import './App.css'
import GameSelector from './components/GameSelector';
import Scoreboard from './components/ScoreBoard';
import Result from './components/Result';
import RockPaperScissors from './games/RockPaperScissors';
import HigherOrLower from './games/HigherOrLower';
import Hangman from './games/Hangman';
import TriviaGame from './games/TriviaGame';
import OddOrEven from './games/OddOrEven';

const App = () => {

  const [selectedGame, setSelectedGame] = useState(null);
  const [gameResult, setGameResult] = useState(null);
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);

  console.log(selectedGame);

  const updateScores = (winner) => {
    if (winner === "Player"){
      setPlayerScore(playerScore + 1);
    } else if (winner === "Computer"){
      setComputerScore(computerScore + 1);
    }
  }
  const reset = () => {
    setGameResult(null);
    setPlayerScore(0);
    setComputerScore(0);
  }

  return (
    <div>
      <h1>Ayani's Arcade 👾</h1>
      <Scoreboard playerScore={playerScore} computerScore={computerScore}/>
      <Result wrongCount={wrongCount} result={gameResult}/>
      <hr/>
      <GameSelector onGameSelect = {setSelectedGame}/>
      {selectedGame === "Rock Paper Scissors" && <RockPaperScissors updateScores={updateScores} onSetGameResult={setGameResult}/>}
      {selectedGame === "Higher or Lower" && <HigherOrLower updateScores={updateScores} onSetGameResult={setGameResult}/>}
      {selectedGame === "Hangman" && <Hangman onSetGameResult={setGameResult} wrongCount={wrongCount} setWrongCount={setWrongCount}/>}
      {selectedGame === "Trivia" && <TriviaGame/>}
      {selectedGame === "OddOrEven" && <OddOrEven updateScores={updateScores} onSetGameResult={setGameResult}/>}
      {!selectedGame && <p></p>}
      <button id="reset" onClick={reset}>Reset</button>
    </div>
  );
    
 }

 export default App;