import { useState, useEffect } from "react";
import useDebounce from "../customHooks/useDebounce";

const SearchwithDebounce = () => {
  const [input, setInput] = useState("");
  const debouncedInput = useDebounce(input, 500);

  useEffect(() => {
    if (debouncedInput) {
      console.log("API call with:", debouncedInput);
    }
  }, [debouncedInput]);

  return (
    <input
      type="text"
      placeholder="Type it here..."
      onChange={(e) => setInput(e.target.value)}
      value={input}
    />
  );
};

export default SearchwithDebounce;
