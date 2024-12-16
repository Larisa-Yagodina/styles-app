import { configureStore } from '@reduxjs/toolkit'
import {modalReducer} from "./reduces";

export const store = configureStore({
    reducer: {
        modalReducer
    },
})

