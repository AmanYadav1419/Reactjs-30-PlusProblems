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
    <div className="flex flex-col items-center p-4 sm:p-6 w-full max-w-md mx-auto">
      <div className="bg-white/5 border border-white/10 rounded-2xl p-8 w-full text-center flex flex-col gap-4">
        <h2 className="text-zinc-400 font-medium text-sm tracking-widest uppercase">Random Quote</h2>
        <blockquote className="text-xl text-white font-medium italic leading-relaxed">
          &ldquo;{qoute}&rdquo;
        </blockquote>
      </div>
    </div>
  )
};

export default RandomQuote;
