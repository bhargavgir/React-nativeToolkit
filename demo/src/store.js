import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./dataReducer";

export default configureStore({
    reducer: {
        counter: dataReducer
    }
});
