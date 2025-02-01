import type { FC, PropsWithChildren } from "react";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/theme-utils";
import { HelmetProvider } from "react-helmet-async";

const theme = extendTheme({});

const Providers: FC<PropsWithChildren> = ({ children }) => (
    <HelmetProvider>
        <ChakraProvider theme={theme}>
            <Router>{children}</Router>
        </ChakraProvider>
    </HelmetProvider>
);
