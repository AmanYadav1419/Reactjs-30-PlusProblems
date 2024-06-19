// question :- Create a component that displays a random quote each time it is rendered.

import React from "react";

const RandomQuote = () => {

  let ArrayofQuotes = [
    "Avoid daydreaming about the years to come.",
    "You are the most important person in the whole world. ",
    "Stay away from Wrong Peoples.",
    "Keep calm and think like you are playing chess and got win",
    "practise makes man perfect",
    "jo badal garajte hai wo kabhi barste nahi",
    "Remember the Name :- Aman Yadav"
  ];

  const randomIndex = Math.floor(Math.random() * ArrayofQuotes.length);

  const qoute = ArrayofQuotes[randomIndex];

  return (
    <div>
        {qoute}
    </div>
  ) 
};

export default RandomQuote;
