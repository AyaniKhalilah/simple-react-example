import { useState, useEffect } from "react";



const TriviaGame = () => {

    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    
    useEffect(() => {
        //fetch("https://opentdb.com/api.php?amount=5&type=multiple")
        fetch(`/simple-react-example/questions.json?timestamp=${new Date().getTime()}`, { cache: "no-store" })
        .then((response) => response.json())
        .then((data) => setQuestions(data.results))
        .catch(() => console.error("Failed to fetch questions"));

    }, []);

    if (questions.length === 0){
        return <h2>Loading...</h2>
    }

    // console.log("Answers: ", [...questions[currentQuestionIndex].incorrect_answers, questions[currentQuestionIndex].correct_answer]);
    const choices = [...questions[currentQuestionIndex].incorrect_answers, questions[currentQuestionIndex].correct_answer].sort(()=> Math.random() - 0.5);

    const handleAnswer = (choice) => {
        console.log(choice);
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        
    };

    return (
        <div>
            <h2>Trivia Game</h2>
            <h3>{questions[currentQuestionIndex].question}</h3>
            <div id="answer-choices">
                {choices.map((choice, index)=>
                    <button key={index} onClick={()=> handleAnswer(choice)}>{choice}</button>
                )}
            </div>
        </div>
    );
};


export default TriviaGame;