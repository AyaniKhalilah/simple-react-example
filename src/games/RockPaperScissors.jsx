import { useState } from 'react';


const Header = ({title, instructions, prompt}) => {
  return (
    <div>
      <h1>{title}</h1>
      <p className="instructions">{instructions}</p>
      <p className="prompt">{prompt}</p>
    </div>
  );
};

const Choices = ({choices, onPlayerChoice}) => {
  return(
    <div className="choices">
        {
          choices.map((choice, index) => (
            <button key={index} onClick={() => onPlayerChoice(choice)}>{choice.icon} {choice.name}</button>
          ))
        }
    </div>
  );
};

const Result = ({result}) => {
  if (!result) {
    return(
      <div id="result">
          <h2></h2> 
          {/* if no result yet,leave blank */}
      </div>
    );
  }
  return(
    <div id="result">
        <p>{result.player}</p>
        <p>{result.computer}</p>
        <h2>{result.outcome}</h2>
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

// function Counter1() {

//     const [count, setCount] = useState(0);
//     // let count = 0; // Plain variable, React doesn't track changes
//     // console.log("useState:", useState(0));
  
//     const increment = () => {
//       setCount(count+1);
//       //count += 1; // Increment the count

//       console.log(count); // Logs the updated count to the console
//       // But the UI won't update!
//     };
  
//     return (
//       <div>
//         <h1>Counter: {count}</h1>
//         <button onClick={increment}>Increment</button>
//       </div>
//     );
//   }


  

const RockPaperScissors = ({updateScores, onSetGameResult}) => {

  const [result, setResult] = useState(null);
  const [winner, setWinner] = useState(null);
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);

  const choices = [
    { name: 'Rock', icon: '🪨 ' },
    { name: 'Paper', icon: '📄 ' },
    { name: 'Scissors', icon: '✂️ ' },
  ];

  const getComputerChoice = () => {
    const choices = ['Rock','Paper','Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }
  
  const determineWinner = (playerChoice, computerChoice) => {
    if (playerChoice === computerChoice) {
      setWinner("Tie");
      onSetGameResult("It's a Tie!");
      return "It's a tie!";
    }
    if (
      (playerChoice === "Rock" && computerChoice === "Scissors") ||
      (playerChoice === "Paper" && computerChoice === "Rock") ||
      (playerChoice === "Scissors" && computerChoice === "Paper")
    ) {
      setWinner("Player");
      updateScores("Player");
      onSetGameResult("You Win!");
      return "You win!";
    }
      setWinner("Computer")
      updateScores("Computer");
      onSetGameResult("You Lost :(");
      return "Computer wins!";
    };

  const handlePlayerChoice = (playerChoice) => {
    const computerChoice = getComputerChoice();
    const gameResult = determineWinner(playerChoice.name, computerChoice);
    console.log(`Player chose: ${playerChoice.name}`);
    console.log(`Computer chose: ${computerChoice}`);
    setResult({
      player : `Player chose: ${playerChoice.name}`,
      computer:`Computer chose: ${computerChoice}`,
      outcome: gameResult
    });
    console.log(result);
  };
  
  return (
    <div>
      {/* <Counter1/> */}
      <Header 
        title="Rock Paper Scissors!" 
        instructions="Choose Rock, Paper, or Scissors to play against the computer."
        prompt="Let's go!"
      />
      {/* <Scoreboard playerScore={playerScore} computerScore={computerScore} winner={winner}/> */}
      <Choices choices={choices} onPlayerChoice={handlePlayerChoice}/>
      <Result result={result}/>
      <Reset/>
      <Footer/>
    </div>
  );
    
 }

 export default RockPaperScissors;