import { useState } from "react";

export default function Accordion({ item }) {
  const [show, setShow] = useState(false);

  const handleShowclick = () => {
    setShow(!show);
  };

  return (
    <div className="accordion realtive border-[1px] border-y-slate-700 mt-1 p-2">
      <h2>
        {item.question}
        <span
          onClick={handleShowclick}
          className="absolute right-5 cursor-pointer"
        >
          {show ? "-" : "+"}
        </span>
      </h2>
      {show ? <p>{item.answer}</p> : ""}
    </div>
  );
}
