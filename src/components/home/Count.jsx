import { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [seconds, setSeconds] = useState(60);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 1) {
        setSeconds((prevSeconds) => prevSeconds - 1);
      } else {
        // Reset to 60 when reaching 0
        setSeconds(60);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [seconds]);

  return <span>{seconds}</span>;
};

export default CountdownTimer;
