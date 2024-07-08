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
    <div>
      {otpFeilds.map((item, index) => (
        <input
          type="text"
          value={item}
          key={index}
          className="h-4 w-4 p-2 m-2"
          onKeyDown={(e) => handleKeyDown(e, index)}
          ref={(currentInput) => {
            ref.current[index] = currentInput;
          }}
        />
      ))}
    </div>
  );
}
