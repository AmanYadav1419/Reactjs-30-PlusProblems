// question :- create an otp section having some boxes in it and it should supports arrow keys as well as on click of box section the cursor should be present and always value can be updatable like overwrite is possible

import { useEffect, useRef, useState } from "react";

export function OTP({ otplength = 6 }) {
  const [otpFeilds, setOtpFeilds] = useState(Array(otplength).fill(""));
  // console.log(otpFeilds);

  const ref = useRef([]);

  const handleKeyDown = (e, index) => {
    const key = e.key;
    console.log(key);

    // for keyboards key event like left and right
    if (key == "ArrowReft") {
      if (index > 0) {
        ref.current[index - 1].focus();
      }
      return;
    }

    if (key == "ArrowRight") {
      if (index + 1 < otpFeilds.length) {
        ref.current[index + 1].focus();
      }
      return;
    }

    // create a copy of otp feilds
    const copyOtpFeilds = [...otpFeilds];

    // if key press is Backspace then make the box empty
    if (key == "Backspace") {
      // console.log("backspace clicked");
      copyOtpFeilds[index] = "";
      setOtpFeilds(copyOtpFeilds);

      //   focus should be get back to the previous position and if it is not the first box element
      if (index > 0) {
        ref.current[index - 1].focus();
      }

      return;
    }

    // if not a number then return
    if (isNaN(key)) {
      return;
    }

    copyOtpFeilds[index] = key;

    // single box is filled then automaticall shift to next box i.e focus and if it is smaller than otpFeilds length
    if (index + 1 < otpFeilds.length) {
      ref.current[index + 1].focus();
    }

    setOtpFeilds(copyOtpFeilds);
  };

  // on component get mount then focus should be on first box element
  useEffect(() => {
    ref.current["0"].focus();
  }, []);

  return (
    <div className="flex flex-col items-center p-4 sm:p-6 w-full max-w-md mx-auto">
      <div className="bg-white/5 border border-white/10 rounded-2xl p-8 w-full flex flex-col items-center gap-8">
        <h2 className="text-zinc-400 font-medium text-sm tracking-widest uppercase">OTP Verification</h2>
        <p className="text-xs text-zinc-500 text-center -mt-4">Enter the {otplength}-digit code. Use arrow keys to navigate.</p>

        <div className="flex gap-3">
          {otpFeilds.map((item, index) => (
            <input
              type="text"
              value={item}
              key={index}
              maxLength={1}
              className={`w-12 h-14 text-center text-xl font-bold font-mono bg-[#18181c] border-2 rounded-xl outline-none transition-all duration-200 caret-blue-400 text-white
                ${item ? 'border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.2)]' : 'border-white/10 focus:border-blue-500/50'}
              `}
              onKeyDown={(e) => handleKeyDown(e, index)}
              ref={(currentInput) => {
                ref.current[index] = currentInput;
              }}
            />
          ))}
        </div>

        {otpFeilds.every(v => v !== '') && (
          <div className="w-full py-3 px-6 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-center">
            <span className="text-sm text-emerald-400 font-semibold">Code entered: {otpFeilds.join('')}</span>
          </div>
        )}
      </div>
    </div>
  );
}
