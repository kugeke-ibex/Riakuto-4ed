import type { FC } from "react";
import React from "react";
import { create } from "zustand";
import "./App.css";

interface BearState {
    bears: number;
    increaseBear: () => void;
    removeAllBears: () => void;
}

const useBearStore = create<BearState>((set) => ({
    bears: 0,
    increaseBear: () => set((state) => ({ bears: state.bears + 1 })),
    removeAllBears: () => set({ bears: 0 }),
}));

const BearCounter: FC = () => {
    const bears = useBearStore((state) => state.bears);

    return (
        <div>
            {[...Array(bears).keys()].map((n) => (
                <span key={n} role="img" aria-label="bear">
                    🐻
                </span>
            ))}
        </div>
    );
};

const CountButton: FC = () => {
    const increaseBear = useBearStore((state) => state.increaseBear);
    const removeAllBears = useBearStore((state) => state.removeAllBears);

    return (
        <div>
            <button onClick={increaseBear}>Add Bear</button>
            <button onClick={removeAllBears}>Remove All</button>
        </div>
    );
};

const App: FC = () => (
    <div className="App">
        <h1>Hello Bears!</h1>
        <CountButton />
        <BearCounter />
    </div>
);

export default App;
