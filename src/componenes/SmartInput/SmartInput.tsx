import React, { useEffect, useState } from "react";

const SmartInput = () => {
  const [value, setValue] = useState("");

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  useEffect(() => {
    console.log("hello");
  }, [value]);

  console.log(value);

  return (
    <div>
      <label>Smart Input</label>
      <input value={value} onChange={handleChange} />
    </div>
  );
};

export default SmartInput;
