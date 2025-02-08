import type { FC, PropsWithChildren } from "react";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ChakraProvider, ThemeConfig } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/theme-utils";
import { HelmetProvider } from "react-helmet-async";
import { Provider as ReduxProvider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
// import { counterReducer, initialState } from "./stores/reducers";
import { counterSlice } from "./stores/counter";


const config: ThemeConfig = {
    initialColorMode: "light",
    useSystemColorMode: false,
};
const theme = extendTheme({ config });

// const store = createStore(counterReducer, initialState);
const store = configureStore({ reducer: counterSlice.reducer });
const Providers: FC<PropsWithChildren> = ({ children }) => (
    <HelmetProvider>
        <ChakraProvider theme={theme}>
            <ReduxProvider store={store} children={children}>
                <Router>{children}</Router>
            </ReduxProvider>
        </ChakraProvider>
    </HelmetProvider>
);

export default Providers;
