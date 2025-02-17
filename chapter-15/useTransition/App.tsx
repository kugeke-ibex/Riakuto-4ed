import type { SyntheticEvent } from "react";
import React from "react";
import { useState, useTransition } from "react";
import { Spinner } from "@chakra-ui/react";

const App = () => {
    const [count, setCount] = useState(0);
    const [isPending, startTransition] = useTransition();

    const handleClick = (event: SyntheticEvent) => {
        event.stopPropagation();
        startTransition(() => {
            setCount((c) => c + 1);
        });
    };

    return (
        <div>
            {isPending && <Spinner />}
            <button onClick={handleClick}>{count}</button>
        </div>
    );
};

export default App;
