import type { FC, PropsWithChildren } from "react";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ChakraProvider, ThemeConfig } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/theme-utils";
import { HelmetProvider } from "react-helmet-async";

const config: ThemeConfig = {
    initialColorMode: "light",
    useSystemColorMode: false,
};

const theme = extendTheme({ config });

const Providers: FC<PropsWithChildren> = ({ children }) => (
    <HelmetProvider>
        <ChakraProvider theme={theme}>
            <Router>{children}</Router>
        </ChakraProvider>
    </HelmetProvider>
);
