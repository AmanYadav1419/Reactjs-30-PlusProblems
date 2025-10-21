import React, { useEffect, useState } from "react";

const MemoryGame = () => {
  // state for the setting the size of the grid, initial value is 4
  const [gridSize, setGridSize] = useState(4);

  // state for containing all of our cards
  const [cards, setCards] = useState([]);

  // state for the flip cards
  const [flippedCards, setFlippedCards] = useState([]);

  // state for the solved cards
  const [solvedCards, setSolvedCards] = useState([]);

  // state for the disabling the solved cards click
  const [disabledCards, setDisabledCards] = useState(false);

  // state for the won , to decide whether the user has won the game or not
  const [won, setWon] = useState(false);

  // state for storing the selected time, by default it will be 60.
  const [selectedTime, setSelectedTime] = useState(60);

  // state for time left
  const [timeLeft, setTimeLeft] = useState(60);

  // state for the timeup condition
  const [timeUp, setTimeUp] = useState(false);

  // to track whether the game is in initial revel phase or not 
  const [initialReveal, setInitialReveal] = useState(true);

  // function to handle grid size change
  const handleGridSizeChange = (e) => {
    const size = parseInt(e.target.value);

    if (size >= 2 && size <= 10) {
      setGridSize(size);
    } else {
      alert("size should be greater than 2 and less than 10");
      return;
    }
  };

  // function to render the game board , if number 4 is selected so 16 cards will be generate
  // on basis of random , so initalising a game borad on random basis

  const initalisedGame = () => {
    // so first we have to get the grid size, for current case we have 16 cards.
    const totalCards = gridSize * gridSize;

    // to calculate how many are there, for current case we have 16 cards , so we have 8 pairs.
    const pairsCount = Math.floor(totalCards / 2);

    // now we have to create numbers, we used n+1, so that it will generate numbers from 1 to n.
    const numbers = [...Array(pairsCount).keys()].map((n) => n + 1);
    // console.log("numbers :-",numbers);

    // for the shuffled cards logic
    const shuffledCards = [...numbers, ...numbers]
      .sort(() => Math.random() - 0.5)
      .slice(0, totalCards)
      .map((number, index) => ({ id: index, number }));
    // console.log("shuffled cards :-",shuffledCards);

    // now we have to store the shuffled cards to the setcards
    setCards(shuffledCards);

    // and make sure all the other states get reset when the game loads
    setFlippedCards([]);
    setSolvedCards([]);
    setWon(false);

    // add the timer state when the game loads
    // reset the countdown
    setTimeLeft(selectedTime);
    // reseting the time flag
    setTimeUp(false);


    // when the game is loaded , start the initial reveal phase
    setInitialReveal(true);

    // after 2 seconds , the cards face will be flipped
    setTimeout(()=>{
      setInitialReveal(false);
    },2000)
  };

  // function to check match of the numbers, is it correct or not
  const checkMatch = (secondId) => {
    // to check , we have to get first id as well
    const [firstId] = flippedCards;

    // now check the condition of match
    if (cards[firstId].number === cards[secondId].number) {
      // then we will push the cards to the solved array
      setSolvedCards([...solvedCards, firstId, secondId]);

      // now they are done so we can make flipped cards empty and make sure they are disabled
      setFlippedCards([]);
      setDisabledCards(false);
    } else {
      setTimeout(() => {
        // now in else condition we are enable the card click , with new combination
        setFlippedCards([]);
        setDisabledCards(false);
      }, 1000);
    }
  };

  // function to handle click on cards
  const handleClick = (id) => {
    // first we have to check if the player won the game or not , and if the card is disabled or not
    // if won or disabled then card will not be clickable
    if (won || disabledCards || timeUp || initialReveal) return;

    // for checking the flipped card length is 0 , then we have to push the card to the state array
    if (flippedCards.length === 0) {
      setFlippedCards([id]);
      return;
    }

    // now for checking the second card
    if (flippedCards.length === 1) {
      // first make sure we won't able to flip the third card
      setDisabledCards(true);

      // now we check that the first card number matches to second card number
      // first of all we are comparing it should not be the same cards
      if (id !== flippedCards[0]) {
        // if that's not the case, then we just add the id , preserving the old id as well
        setFlippedCards([...flippedCards, id]);

        // check match logic of the numbers
        checkMatch(id);
      } else {
        // else we click on same card twice so that remove the flipped card from array and make the card clickable
        setFlippedCards([]);
        setDisabledCards(false);
      }
    }
  };

  // function for the flipped cards, apply some styles
  const isFlipped = (id) =>
    initialReveal || flippedCards.includes(id) || solvedCards.includes(id);

  // function for checking the id's that are solved , and apply some styles
  const isSolved = (id) => solvedCards.includes(id);

  // use effect to initialised the game
  useEffect(() => {
    initalisedGame();
  }, [gridSize]);

  // use effect to check the logic of won
  useEffect(() => {
    // if all the cards are inside the solved cards
    // that means won the game
    if (solvedCards.length === cards.length && cards.length > 0) {
      setWon(true);
    }
  }, [solvedCards, cards]);

  // use effect for the count down of every second
  useEffect(() => {
    // if won or time end , timer should stop
    if (won || timeUp) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);

          // make the set time up true, for time's up
          setTimeUp(true);
          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [won, timeUp]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-300 p-4">
      <h1 className="text-3xl font-bold mb-6">Memory Game</h1>
      {/* input */}
      <div className="mb-4">
        <label htmlFor="gridSize" className="mr-2">
          {" "}
          Grid Size : (max 10)
        </label>
        <input
          id="gridSize"
          type="number"
          min="2"
          max="10"
          value={gridSize}
          onChange={handleGridSizeChange}
          className="border-2 border-gray-500 rounded px-2 py-1"
        />
      </div>

      {/* input div for the timer selection */}
      <div className="mb-4">
        <label htmlFor="timeSelect" className="mr-2">
          Select Time Limit (seconds):
        </label>
        <select
          id="timeSelect"
          value={selectedTime}
          onChange={(e) => setSelectedTime(parseInt(e.target.value))}
          className="border-2 border-gray-500 rounded px-2 py-1"
        >
          <option value={30}>30 seconds</option>
          <option value={60}>60 seconds</option>
          <option value={90}>90 seconds</option>
          <option value={120}>120 seconds</option>
        </select>
      </div>

      {/* displaying the timer */}
      <div className="mb-4 text-xl font-semibold">Time Left: {timeLeft}s</div>

      {/* Game board */}
      <div
        className={`grid gap-2 mb-4`}
        style={{
          gridTemplateColumns: `repeat(${gridSize}, minmax(0, 1fr))`,
          width: `min(100%, ${gridSize * 4.5}rem)`,
        }}
      >
        {cards.map((card) => (
          <div
            onClick={() => handleClick(card.id)}
            key={card.id}
            className={`aspect-square flex items-center justify-center text-xl font-bold rounded-lg cursor-pointer transition-all duration-300 ${
              isFlipped(card.id)
                ? isSolved(card.id)
                  ? "bg-green-500 text-white"
                  : "bg-blue-500 text-white"
                : "bg-white text-gray-800"
            }`}
          >
            {isFlipped(card.id) ? card.number : "?"}
          </div>
        ))}
      </div>

      {/* Result of won game */}
      {won && (
        <div className="mt-4 mb-4 text-4xl font-bold text-green-600 animate-bounce">
          You Won the Game!!
        </div>
      )}

      {/* Result of timeup game */}
      {timeUp && !won && (
        <div className="mt-4 text-4xl font-bold text-red-600 animate-bounce">
          Oops! Time's up. Try Again.
        </div>
      )}

      {/* Reset / Play Again Game button */}
      <button
        onClick={initalisedGame}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-green-500 transition-all duration-100 font-bold text-3xl"
      >
        {won ? "Play Again" : "Reset"}
      </button>
    </div>
  );
};

export default MemoryGame;
