const GameSelector = ({onGameSelect}) => {
  return(
    <>
      <h2>Pick a Game</h2>
      <button onClick={()=> onGameSelect("Rock Paper Scissors")}>Rock Paper Scissors</button>
      <button onClick={()=> onGameSelect("Higher or Lower")}>Higher or Lower</button>
      <button onClick={()=> onGameSelect("Hangman")}>Hangman</button>
      <button onClick={()=> onGameSelect("Trivia")}>Trivia</button>
      <button onClick={()=> onGameSelect("OddOrEven")}>Odd or Even</button>
    </>
  );
}

export default GameSelector;