import { createAction } from "@reduxjs/toolkit";


const FEATURE = "counter";
export const decrement = createAction(`${FEATURE}/decrement`);
export const increment = createAction(`${FEATURE}/increment`);
export const add = createAction<number>(`${FEATURE}/add`);
