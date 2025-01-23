import { useState } from 'react'

const OddOrEven = ({updateScores, onSetGameResult}) => {

    // const [playerScore, setPlayerScore] = useState(0);
    // const [computerScore, setComputerScore] = useState(0);
    // const [result, setResult] = useState("")

    const generateRandomNumber = () => {
        return Math.floor(Math.random() * 100);
    }

    const handleClick = (button) => {
        let guessed = "";
        // Generate 2 numbers 
        console.log(`clicked: ${button}`);
        const rand1 = generateRandomNumber();
        const rand2 = generateRandomNumber();

        //Find their sum & log whether even or odd
        const sum = rand1 + rand2;
        console.log((sum % 2 === 0)? `${sum} is even` : `${sum} is odd`);
        
        // check if player guess matches sum's result
        if ((button === "even") && (sum % 2 === 0) ||
            (button === "odd") && (sum % 2 !== 0))
        {
            guessed = "correctly!";
            // setPlayerScore(playerScore + 1);
            updateScores("Player");
        } else {
            guessed = "incorrectly.";
            // setComputerScore(computerScore + 1);
            updateScores("Computer");
        }

        // setResult(`Player clicked ${button}, ${rand1} + ${rand2} = ${rand1 + rand2}, you guessed ${guessed}`);
        onSetGameResult(`Player clicked ${button}, ${rand1} + ${rand2} = ${rand1 + rand2}, you guessed ${guessed}`);
        console.log(result);
    }

    return(
        <div>
            <h2>Odd or Even</h2>
            <button onClick={() => handleClick("even")}>Even</button>
            <button onClick={() => handleClick("odd")}>Odd</button>
            {/* <h3>Player Score: {playerScore}</h3>
            <h3>Computer Score: {computerScore}</h3>
            {result && <><hr/><h3>Result:</h3><p>{result}</p></>} */}
        </div>
    );
}

export default OddOrEven;
