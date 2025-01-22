import { useState } from 'react'
const wordList = [
    "Albatross",
    "Alligator",
    "Alpaca",
    "Ant",
    "Anteater",
    "Antelope",
    "Ape",
    "Armadillo",
    "Donkey",
    "Baboon",
    "Badger",
    "Barracuda",
    "Bat",
    "Bear",
    "Beaver",
    "Bee",
    "Bison",
    "Boar",
    "Buffalo",
    "Butterfly",
    "Camel",
    "Capybara",
    "Caribou",
    "Cassowary",
    "Cat",
    "Caterpillar",
    "Cattle",
    "Chamois",
    "Cheetah",
    "Chicken",
    "Chimpanzee",
    "Chinchilla",
    "Chough",
    "Clam",
    "Cobra",
    "Cockroach",
    "Cod",
    "Cormorant",
    "Coyote",
    "Crab",
    "Crane",
    "Crocodile",
    "Crow",
    "Curlew",
    "Deer",
    "Dinosaur",
    "Dog",
    "Dogfish",
    "Dolphin",
    "Dotterel",
    "Dove",
    "Dragonfly",
    "Duck",
    "Dugong",
    "Dunlin",
    "Eagle",
    "Eel",
    "Eland",
    "Elephant",
    "Elk",
    "Emu",
    "Falcon",
    "Ferret",
    "Finch",
    "Fish",
    "Flamingo",
    "Fly",
    "Fox",
    "Frog",
    "Gaur",
    "Gazelle",
    "Gerbil",
    "Giraffe",
    "Gnu",
    "Goat",
    "Goldfinch",
    "Goldfish",
    "Goose",
    "Gorilla",
    "Grasshopper",
    "Gull",
    "Hamster",
    "Hare",
    "Hawk",
    "Hedgehog",
    "Heron",
    "Herring",
    "Hippopotamus",
    "Hornet",
    "Horse",
    "Human",
    "Hummingbird",
    "Hyena",
    "Ibex",
    "Ibis",
    "Jackal",
    "Jaguar",
    "Jay",
    "Jellyfish",
    "Kangaroo",
    "Kingfisher",
    "Koala",
    "Lapwing",
    "Lark",
    "Lemur",
    "Leopard",
    "Lion",
    "Llama",
    "Lobster",
    "Magpie",
    "Mallard",
    "Manatee",
    "Mandrill",
    "Mantis",
    "Marten",
    "Meerkat",
    "Mink",
    "Mole",
    "Mongoose",
    "Monkey",
    "Moose",
    "Mosquito",
    "Mouse",
    "Mule",
    "Narwhal",
    "Nightingale",
    "Octopus",
    "Okapi",
    "Opossum",
    "Oryx",
    "Ostrich",
    "Otter",
    "Owl",
    "Oyster",
    "Panther",
    "Parrot",
    "Partridge",
    "Peafowl",
    "Pelican",
    "Penguin",
    "Pig",
    "Pigeon",
    "Pony",
    "Porcupine",
    "Porpoise",
    "Quail",
    "Quelea",
    "Quetzal",
    "Rabbit",
    "Raccoon",
    "Rail",
    "Ram",
    "Rat",
    "Raven",
    "Reindeer",
    "Rhinoceros",
    "Rook",
    "Salamander",
    "Salmon",
    "Sandpiper",
    "Sardine",
    "Scorpion",
    "Seahorse",
    "Seal",
    "Shark",
    "Sheep",
    "Shrew",
    "Skunk",
    "Snail",
    "Snake",
    "Sparrow",
    "Spider",
    "Squid",
    "Squirrel",
    "Starling",
    "Stingray",
    "Stork",
    "Swallow",
    "Swan",
    "Termite",
    "Tiger",
    "Toad",
    "Trout",
    "Turkey",
    "Turtle",
    "Viper",
    "Vulture",
    "Wallaby",
    "Walrus",
    "Wasp",
    "Weasel",
    "Whale",
    "Wildcat",
    "Wolf",
    "Wolverine",
    "Wombat",
    "Woodcock",
    "Woodpecker",
    "Worm",
    "Yak",
    "Zebra"
];

// Generates a random word from the word list.
const randomSecretWord = () => {
    const randomIndex = Math.floor(Math.random() * wordList.length);
    return wordList[randomIndex].toLowerCase();
};

// Displays the keyboard for the player to make guesses.
const Keyboard = ({onBtnClick}) => {
    const buttons = "abcdefghijklmnopqrstuvwxyz".split('');
    return (
        <p className="hangman-keyboard">
        {buttons.map((letter)=>{
            return (
                <button className="hangman-button" onClick={onBtnClick} key={letter} value={letter}>{letter}</button>
            )
        })}
        </p>
        )
};

// Displays the current guessed word with correct letters filled in.
const GuessedWord =({guessedWord}) => {
    console.log(`guessedWord: ${guessedWord}`);
    return (
            guessedWord.map((letter,index)=> {
            return (
                <span className="hangman-word" key={index}> {letter} </span>
            )
        })
    )
  };




// Main Hangman game component.
const Hangman = ({onSetGameResult, wrongCount, setWrongCount}) => {
    const [secretWord, setSecretWord] = useState(randomSecretWord());
    const [guessedWord, setGuessedWord] = useState(new Array(secretWord.length).fill('-'));
    const [didWinGame, setDidWinGame] = useState(false);

    // Resets the game to start over with a new word.
    const resetGame = () => {
        const newSecretWord = randomSecretWord();
        setSecretWord(newSecretWord);
        setGuessedWord(new Array(newSecretWord.length).fill('-'))
        setWrongCount(0);
        onSetGameResult(``);
        setDidWinGame(false);
        console.log(secretWord);
    };


    // Handles letter clicks and updates the guessed word or wrong count.
    const handleClick = (event) => {
        const guessedLetter = event.target.value.toLowerCase();
        const newGuessedWord = [...guessedWord];
        console.log(secretWord);
        console.log(guessedLetter);

        if (secretWord.includes(guessedLetter)) { 
            // replace the dash where the correctly guessed letter appears
            for (let index = 0; index < secretWord.length; index++) {
                if(secretWord[index] === guessedLetter){
                    newGuessedWord[index] = secretWord[index];
                }
            }
            setGuessedWord(newGuessedWord);

        } else { 
            // Track the number of wrong guesses
            setWrongCount(wrongCount + 1);
            console.log(wrongCount);
            
        }

        if (wrongCount >= 5){
            // - If the wrongCount reaches 5 or more, display a message indicating that the player has lost the game.
            setGuessedWord(secretWord.split(''));
            onSetGameResult("Game Over!");
        }

        if(newGuessedWord.join("") === secretWord){
            // If player gueses all the letters, set game result 
            onSetGameResult("You win!");
            setDidWinGame(true);
        } 


    };

    return(
        <div>
            <h1>Hangman Game</h1>
            {didWinGame === true && <h2>You Guessed it!</h2>}
            {wrongCount >= 5 && <h2>Out of guesses! The answer was {secretWord}.</h2>}
            <GuessedWord guessedWord = {guessedWord}/>
            <br/>
            <Keyboard onBtnClick={handleClick}/>
            <button onClick={resetGame}>Reset Game</button>
        </div>
    )
};


export default Hangman;
