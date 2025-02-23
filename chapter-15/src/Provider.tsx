import type { FC, PropsWithChildren } from "react";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { ThemeConfig } from "@chakra-ui/theme";
import { extendTheme } from "@chakra-ui/theme-utils";
import { HelmetProvider } from "react-helmet-async";
import { SWRConfig } from "swr";

const swrOptions = {
  suspense: true,
  revalidateOnFocus: false,
  shouldRetryOnError: false,
  dedupingInterval: 60000,
};

const Providers: FC<PropsWithChildren> = ({ children }) => (
    <HelmetProvider>
        <ChakraProvider>
            <Router>
              <SWRConfig value={swrOptions}>
                {children}
              </SWRConfig>
            </Router>
        </ChakraProvider>
    </HelmetProvider>
);

export default Providers;
