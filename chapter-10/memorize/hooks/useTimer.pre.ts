import { useEffect, useState, useMemo, useRef } from "react";
import type { SyntheticEvent } from "react";
import { getPrimes } from "../utils/prime";

export const useTimer = (maxCount: number): [number, boolean, () => void] => {
    const [timeLeft, setTimeLeft] = useState(maxCount);
    const primes = useMemo(() => getPrimes(maxCount), [maxCount]); // getPrimesが重い処理とした場合を考慮して、maxCountが変わるときに再計算する

    const intervalId = useRef<ReturnType<typeof setInterval>>();
    const tick = () => setTimeLeft((t) => t - 1);
    const reset = (event?: SyntheticEvent) => {
        event?.stopPropagation();

        if (intervalId.current !== undefined)  {
            clearInterval(intervalId.current);
        }
        setTimeLeft(maxCount);
        intervalId.current = setInterval(tick, 1000);
    };

    useEffect(() => {
        reset();
        
        return () => clearInterval(intervalId.current);
    }, []);

    useEffect(() => {
        if (timeLeft === 0) reset();
    }, [timeLeft, maxCount]);

    return [timeLeft, primes.includes(timeLeft), reset];
};
