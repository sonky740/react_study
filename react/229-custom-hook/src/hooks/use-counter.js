import { useState, useEffect } from 'react';

const useCounter = (init = 0, increase = 1) => {
  const [counter, setCounter] = useState(init);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + increase);
    }, 1000);

    return () => clearInterval(interval);
  }, [increase]);

  return counter;
};

export default useCounter;
