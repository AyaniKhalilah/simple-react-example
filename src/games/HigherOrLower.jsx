import React, { useState } from "react";


const Result = ({ result }) => {
    if (!result) {
        return <div id="result"><h2>No result yet!</h2></div>;
    }
    return (
        <div id="result">
        <h2>{result}</h2>
        </div>
    );
};

const HigherOrLower = ({updateScores, onSetGameResult}) => {
    const generateRandomNumber = () => Math.floor(Math.random() * 100) + 1;
    const [currentNumber, setCurrentNumber] = useState(generateRandomNumber());
    const [result, setResult] = useState(generateRandomNumber());

    const handleGuess = (guess) => {
        const newNumber = generateRandomNumber();
        console.log(guess);

        if ((newNumber > currentNumber) && (guess === "higher")){
            setResult("correct");
            updateScores("Player");
            onSetGameResult("You Win!");
            console.log("correct!");
        } else if ((newNumber < currentNumber) && (guess === "lower")){
            setResult("correct");
            updateScores("Player");
            onSetGameResult("You Win!");
            console.log("correct!");
        } else {
            setResult("incorrect");
            updateScores("Computer");
            onSetGameResult("You Lost :(");
            console.log("incorrect, try again");
        }
        setCurrentNumber(newNumber);
        console.log(`new number: ${newNumber}`)
    }

    return (
        <div>
            <h1>Higher or Lower</h1>
            <p>Current Number: {currentNumber}</p>
            <div>
                <button onClick={() => handleGuess("higher")}>Higher</button>
                <button onClick={() => handleGuess("lower")}>Lower</button>
            </div>
            {/* add Result component here */}
        </div>
    );
};
export default HigherOrLower;