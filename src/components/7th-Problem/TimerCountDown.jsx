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
  useEffect(()=>{
    if(time > 0){
      const timer = setTimeout(()=> setTime(time -1 ), 1000)
      
      return ()=> {
        clearTimeout(timer);
      }
    }
  },[time])
  
  return (
    <div>
      <div>
        <h1>Time Left : {time} second </h1>
      </div>
    </div>
  );
};

export default TimerCountDown;
