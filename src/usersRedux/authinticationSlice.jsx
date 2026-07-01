import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isLoggedIn: false,
    username: "",
    isLoading: false,
    error: null,
}

const logInSlice = createSlice({
    name: "authintication",
    initialState,
    reducers: {
        login: (state, action) => {
            state.username = action.payload
            state.isLoggedIn = true
        },
        logout: (state, action) => {
            state.username = ""
            state.isLoggedIn = false
        }
    }
})

export const { login,logout } = logInSlice.actions
export default logInSlice.reducer