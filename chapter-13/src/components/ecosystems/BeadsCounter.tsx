import { useReducer } from "react";
import type { FC } from "react";
import React from "react";
import BeadsCounterFrame from "../organisms/BeadsCounterFrame";

const CounterActionType = {
    decremented: "counter/decremented",
    incremented: "counter/incremented",
    added: "counter/added",
} as const;

type ValueOf<T> = T[keyof T];

interface CounterAction {
    type: ValueOf<typeof CounterActionType>;
    payload?: number;
}

interface CounterState {
    count: number;
}

const counterReducer = (
    state: CounterState,
    action: CounterAction
): CounterState => {
    switch (action.type) {
        case CounterActionType.added:
            return {
                ...state,
                count: state.count + (action.payload ?? 0),
            };
        case CounterActionType.decremented:
            return {
                ...state,
                count: state.count < 0 ? 0 : state.count - 1,
            };
        case CounterActionType.incremented:
            return {
                ...state,
                count: state.count + 1,
            };
        default:
            const _: never = action.type;

            return state;
    }
};

const decrement = (): CounterAction => ({
    type: CounterActionType.decremented,
});

const increment = (): CounterAction => ({
    type: CounterActionType.incremented,
});

const add = (payload: number): CounterAction => ({
    type: CounterActionType.added,
    payload,
});

const BeadsCounter: FC = () => {
    const initialCount = 0;
    const [state, dispatch] = useReducer(
        counterReducer,
        initialCount,
        (count: number): CounterState => ({ count })
    );

    return (
        <BeadsCounterFrame
            count={state.count}
            decrement={() => dispatch(decrement())}
            increment={() => dispatch(increment())}
            add={(amount) => dispatch(add(amount))}
        />
    );
};

export default BeadsCounter;
