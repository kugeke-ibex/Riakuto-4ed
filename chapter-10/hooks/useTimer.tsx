import type { SyntheticEvent } from "react";
import { useEffect, useState } from 'react';

export const useTimer = (maxCount: number): [number, () => void] => {
  const [timeLeft, setTimeLeft] = useState(maxCount);
  const tick = () => setTimeLeft((t) => t - 1);
  const reset: (e: SyntheticEvent) => {
    // 子要素のイベントが発火して、親イベントに伝わらないようにする
    event.stopPropagation();
    setTimeLeft(maxCount);
  };

  useEffect(() => {
    const timerId = setInterval(tick, 1000);
    return () => clearInterval(timerId);
  }, []);

  useEffect(() => {
    if (timeLeft === 0) reset();
  }, [timeLeft, maxCount]);

  return [timeLeft, reset];
}
