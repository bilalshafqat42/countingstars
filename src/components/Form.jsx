import React, { useState } from "react";

const Form = () => {
  const [value, setValue] = useState("");
  return (
    <div>
      <input type="text" onChange={(e) => setValue(e.target.value)} />
      <button>Submit</button>
    </div>
  );
};

export default Form;
