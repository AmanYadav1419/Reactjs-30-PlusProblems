// problem statment :- Create a form that takes user input and displays it in real-time.

import React, { useState } from "react";

const FormInput = () => {
  const [name, setName] = useState("");

  return (
    <div>
      <form>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p>User Input : {name}</p>
      </form>
    </div>
  );
};

export default FormInput;
