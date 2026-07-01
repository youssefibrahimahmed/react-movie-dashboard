import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getAllMovies = createAsyncThunk("movies/getMovies", async (url, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
        const res = await axios.get(url)
        return res.data
    } catch (error) {
        return rejectWithValue(error.message);
    }

})

const getMovieDetails = createAsyncThunk("movies/getDetails", async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
        const res = await axios.get(`https://api.tvmaze.com/shows/${id}`)
        return res.data
    } catch (error) {

        return rejectWithValue(error.message);
    }

})


export { getAllMovies, getMovieDetails }