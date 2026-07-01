import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./filmRedux/filmsReduxSlice"
import logInReducer from "./usersRedux/authinticationSlice"
export const Store = configureStore({
    reducer: {
        MoviesData: movieReducer,
        loginData: logInReducer,
    }
})