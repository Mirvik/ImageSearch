import { configureStore } from "@reduxjs/toolkit";
import imageSlicer from "./imageSlicer";


const store = configureStore({
    reducer: {
        image: imageSlicer,
    }
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;