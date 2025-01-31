import type { FC } from "react";
import React from "react";
import { useCountdownTimer } from "../hooks/useCountdownTimer";
import TimerBox from "./TimerBox";

type Props = { maxCount?: number };
const MAX_COUNT = 60;
// presentation componentのpropsは全て省略可能にして、それぞれ適当なデフォルト値を設定しておくことでcontainer componentを実装するときに試行錯誤しやすい
const CountdownTimer: FC<Props> = ({ maxCount = MAX_COUNT }) => {
    const [timeLeft, reset] = useCountdownTimer(maxCount);

    return <TimerBox {...{ timeLeft, reset }} />;
};

export default CountdownTimer;
