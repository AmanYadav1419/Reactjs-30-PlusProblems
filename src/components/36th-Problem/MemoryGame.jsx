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
    setTimeout(() => {
      setInitialReveal(false);
    }, 2000)
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
    <div className="flex flex-col items-center p-4 sm:p-6 w-full max-w-2xl mx-auto">
      <div className="bg-white/5 border border-white/10 shadow-[inner_0_1px_0_rgba(255,255,255,0.1)] rounded-[2rem] p-8 w-full flex flex-col items-center gap-8">
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6 border-b border-white/5 pb-6">
          <h2 className="text-zinc-400 font-medium text-sm tracking-widest uppercase">Memory Protocol</h2>
          <div className="flex gap-4">
            <div className="flex flex-col text-sm border-r border-white/10 pr-4">
              <label htmlFor="gridSize" className="text-zinc-500 font-medium text-xs mb-1 uppercase tracking-widest">
                Grid Size
              </label>
              <input
                id="gridSize"
                type="number"
                min="2"
                max="10"
                value={gridSize}
                onChange={handleGridSizeChange}
                className="bg-[#18181c] border border-white/10 rounded-lg px-3 py-2 text-white outline-none w-20 text-center"
              />
            </div>
            <div className="flex flex-col text-sm border-r border-white/10 pr-4">
              <label htmlFor="timeSelect" className="text-zinc-500 font-medium text-xs mb-1 uppercase tracking-widest">
                Time Limit
              </label>
              <select
                id="timeSelect"
                value={selectedTime}
                onChange={(e) => setSelectedTime(parseInt(e.target.value))}
                className="bg-[#18181c] border border-white/10 rounded-lg px-3 py-2 text-white outline-none"
              >
                <option value={30}>30s</option>
                <option value={60}>60s</option>
                <option value={90}>90s</option>
                <option value={120}>120s</option>
              </select>
            </div>
            <div className="flex flex-col text-sm items-center justify-center pl-2">
              <span className="text-zinc-500 font-medium text-xs mb-1 uppercase tracking-widest">Time Left</span>
              <span className={`text-xl font-bold font-mono ${timeLeft < 10 ? 'text-red-400' : 'text-blue-400'}`}>
                {timeLeft}s
              </span>
            </div>
          </div>
        </div>

        {/* Game board */}
        <div
          className="grid gap-3 w-full"
          style={{
            gridTemplateColumns: `repeat(${gridSize}, minmax(0, 1fr))`,
            width: `min(100%, ${gridSize * 4.5}rem)`,
          }}
        >
          {cards.map((card) => (
            <div
              onClick={() => handleClick(card.id)}
              key={card.id}
              className={`aspect-square flex items-center justify-center text-2xl font-bold rounded-xl cursor-pointer transition-all duration-500 transform-gpu ${isFlipped(card.id)
                  ? isSolved(card.id)
                    ? "bg-emerald-500/20 border-emerald-500/50 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.2)]"
                    : "bg-blue-500 border-blue-400 text-white shadow-[0_0_20px_rgba(59,130,246,0.4)]"
                  : "bg-[#18181c] border-white/10 text-transparent hover:bg-white/10 hover:scale-105 border"
                }`}
              style={{
                transform: isFlipped(card.id) ? "rotateY(0deg)" : "rotateY(180deg)",
                borderWidth: '1px'
              }}
            >
              <div
                className="transition-opacity duration-300"
                style={{ opacity: isFlipped(card.id) ? 1 : 0 }}
              >
                {card.number}
              </div>
            </div>
          ))}
        </div>

        {/* Status Messaging */}
        <div className="min-h-[60px] flex items-center justify-center flex-col gap-4">
          {won && (
            <div className="text-xl tracking-wider uppercase font-bold text-emerald-400">
              Protocol Complete
            </div>
          )}

          {timeUp && !won && (
            <div className="text-xl tracking-wider uppercase font-bold text-red-400">
              Session Expired
            </div>
          )}

          <button
            onClick={initalisedGame}
            className="bg-white text-black px-8 py-3 rounded-xl hover:bg-zinc-200 active:scale-95 transition-all text-sm font-bold uppercase tracking-widest mt-2"
          >
            {won ? "Restart Protocol" : "Reset Grid"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MemoryGame;
