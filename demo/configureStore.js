import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./src/dataReducer";

export const configureStore = () => ({
    reducer: {
        counter: dataReducer
    }
});
