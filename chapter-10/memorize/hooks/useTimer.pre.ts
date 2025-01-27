import { useEffect, useState, useMemo } from "react";
import type { SyntheticEvent } from "react";
import { getPrimes } from "../utils/prime";

export const useTimer = (maxCount: number): [number, boolean, () => void] => {
    const [timeLeft, setTimeLeft] = useState(maxCount);
    const primes = useMemo(() => getPrimes(maxCount), [maxCount]); // getPrimesが重い処理とした場合を考慮して、maxCountが変わるときに再計算する
    const tick = () => setTimeLeft((t) => t - 1);
    const reset = (event?: SyntheticEvent) => {
        event?.stopPropagation();
        setTimeLeft(maxCount);
    };

    useEffect(() => {
        const timerId = setInterval(tick, 1000);
        return () => clearInterval(timerId);
    }, []);

    useEffect(() => {
        if (timeLeft === 0) reset();
    }, [timeLeft, maxCount]);

    return [timeLeft, primes.includes(timeLeft), reset];
};
