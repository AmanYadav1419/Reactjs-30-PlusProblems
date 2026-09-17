// Question / Problem statment :- Build a timer that counts down from a specified time.

import React, { useEffect, useState } from "react";

const TimerCountDown = () => {
  const [time, setTime] = useState(60);

  // function to start count down

  // method 1st:-
  // function countDown() {
  //   setTimeout(() => {
  //     if(time === 0){
  //       setTime(60)
  //     } else{
  //       setTime(time - 1);
  //     }
  //   }, 1000);
  // }
  // countDown();

  // method 2nd :-
  useEffect(() => {
    if (time > 0) {
      const timer = setTimeout(() => setTime(time - 1), 1000)

      return () => {
        clearTimeout(timer);
      }
    }
  }, [time])

  return (
    <div className="flex flex-col items-center p-4 sm:p-6 w-full max-w-xs mx-auto">
      <div className="bg-white/5 border border-white/10 rounded-2xl p-8 w-full flex flex-col items-center gap-4">
        <h2 className="text-zinc-400 font-medium text-sm tracking-widest uppercase">Countdown</h2>
        <span className="text-7xl font-black font-mono tracking-tighter text-white">
          {time < 10 ? `0${time}` : time}
        </span>
        <span className="text-xs text-zinc-500 font-medium tracking-widest uppercase">seconds remaining</span>
        {time === 0 && (
          <span className="text-emerald-400 text-sm font-semibold mt-2">Timer Complete</span>
        )}
      </div>
    </div>
  );
};

export default TimerCountDown;
