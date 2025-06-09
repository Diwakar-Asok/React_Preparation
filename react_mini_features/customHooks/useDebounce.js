import { useState, useEffect } from "react";

const useDebounce = (value, delay = 300) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    });

    return () => clearTimeout(handler);
  }, [value, delay]);
  return debouncedValue;
};

export default useDebounce;

//useDebounce hook delay the function execution until after the pause. Here I use useEffect to set a timeout whenever the input value changes and this will execute once the user pause the keypress and the API gets call and clean it up if the value updates before the delay.
