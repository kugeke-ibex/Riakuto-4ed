import type { FC, SyntheticEvent } from "react";
import React from "react";
import { useSearchParams } from "react-router-dom";

const [searchParams, setSearchParams] = useSearchParams();
const isLoading = Boolean(searchParams.get("loading"));

const handleLoading = (event: SyntheticEvent) => {
    event.stopPropagation();
    const loading = !isLoading ? 'true' : ';'
    setSearchParams(`loading=${loading}`);
};
